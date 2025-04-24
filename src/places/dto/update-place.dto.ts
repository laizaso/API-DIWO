import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdatePlaceDto {
  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsDateString()
  goalDate?: string;
}
