import { IsString, IsDateString, IsUrl } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  country: string;

  @IsString()
  location: string;

  @IsDateString()
  goalDate: string; // ISO date: "2025-09-01"

  @IsUrl()
  flagUrl: string;
}
