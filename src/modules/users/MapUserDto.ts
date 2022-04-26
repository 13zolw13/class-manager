import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';


export class MapUserDto {
  constructor(private user: CreateUserDto) {}

  returnUser(): User {
    const readyUserToSave = new User();
    readyUserToSave.username = this.user.firstName;
    readyUserToSave.email = this.user.email;
    readyUserToSave.telephone = this.user.telephone;
    readyUserToSave.role = 'user';
    return readyUserToSave;
  }
}
