import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ContactInformationDto } from './contactInfo.dto';

export class CreateUserDto {
  @ApiProperty({ default: 'example@example.com', description: 'User email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({ default: 'password', description: 'User password' })
  @IsString()
  @IsNotEmpty()
  password: string;
  @ApiProperty({ default: 'John', description: 'User first name' })
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @ApiProperty({ default: 'Doe', description: 'User last name' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'Username', default: 'example' })
  @IsString()
  username: string;
  @ApiProperty({
    type: () => ContactInformationDto,
    description: 'User contact information',
    default: {
      street: 'Main St',
      city: 'Anytown',
      telephone: '555-555-5555',
      placeNumber: '123',
    },
  })
  @ValidateNested({ each: true })
  @Type(() => ContactInformationDto)
  @IsNotEmpty()
  contactInfo: ContactInformationDto;
}
