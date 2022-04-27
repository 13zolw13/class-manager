import { CreateUserDto } from './dto/create-user.dto';
import { ContactInformation } from './entities/contactInfo.entity';
import { User } from './entities/user.entity';
import { UserRole } from './UserRole';

export class MapUserDto {
  constructor(private user: CreateUserDto) {}

  returnUser(UserContactInfo: ContactInformation): User {
    const readyUserToSave = new User();
    readyUserToSave.username = this.user.username;
    readyUserToSave.firstName = this.user.firstName;
    readyUserToSave.lastName = this.user.lastName;
    readyUserToSave.password = this.user.password;
    readyUserToSave.email = this.user.email;
    readyUserToSave.role = UserRole.ADMIN;
    readyUserToSave.contactInfo = UserContactInfo;
    return readyUserToSave;
  }
  returnUserContactInfo(): ContactInformation {
    const readyUserContactInfoToSave = new ContactInformation();
    readyUserContactInfoToSave.city = this.user.contactInfo.city;
    readyUserContactInfoToSave.street = this.user.contactInfo.street;
    readyUserContactInfoToSave.telephone = this.user.contactInfo.telephone;
    readyUserContactInfoToSave.placeNumber = this.user.contactInfo.placeNumber;

    return readyUserContactInfoToSave;
  }
}
