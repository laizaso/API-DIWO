import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PlacesService, PrismaService],
  controllers: [PlacesController]
})
export class PlacesModule {}
