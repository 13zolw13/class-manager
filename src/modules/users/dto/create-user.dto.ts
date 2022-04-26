import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ContactInformationDto } from './contactinfo.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ValidateNested({ each: true })
  @Type(() => ContactInformationDto)
  @IsNotEmpty()
  contactInfo: ContactInformationDto;
}
