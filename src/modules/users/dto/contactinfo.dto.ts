import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ContactInformationDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  telephone: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  placeNumber: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  city: string;
}
