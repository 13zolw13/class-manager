import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ContactInformationDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  telephone: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  street: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  placeNumber: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  city: string;
}
