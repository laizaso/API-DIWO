import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePlaceDto) {
    const { country, location, goalDate, flagUrl } = dto;
    return this.prisma.placeToVisit.create({
      data: {
        country,
        location,
        goalDate: new Date(goalDate),
        flagUrl,
      },
    });
  }

  async findAll() {
    return this.prisma.placeToVisit.findMany({
      orderBy: { goalDate: 'asc' },
    });
  }

  async findOne(id: number) {
    const place = await this.prisma.placeToVisit.findUnique({ where: { id } });
    if (!place) throw new NotFoundException('Lugar não encontrado');
    return place;
  }

  async update(id: number, dto: UpdatePlaceDto) {
    return this.prisma.placeToVisit.update({
      where: { id },
      data: {
        ...(dto.location && { location: dto.location }),
        ...(dto.goalDate && { goalDate: new Date(dto.goalDate) }),
      },
    });
  }

  async remove(id: number) {
    return this.prisma.placeToVisit.delete({ where: { id } });
  }
}
