import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ContactInformation } from './entities/contactInfo.entity';
import { User } from './entities/user.entity';
import { MapUserDto } from './MapUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(ContactInformation)
    private readonly contactInfoRepository: Repository<ContactInformation>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const UserContactInfo = await this.contactInfoRepository.save(
      new MapUserDto(createUserDto).returnUserContactInfo(),
    );
    console.log(UserContactInfo);
    return await this.userRepository.save(
      new MapUserDto(createUserDto).returnUser(UserContactInfo),
    );
  }

  findAll() {
    return this.userRepository.find({ relations: ['contactInfo'] });
  }

  findOne(user: string): Promise<User> {
    return this.userRepository.findOne({ username: user });
  }
  findOneById(id: number) {
    return this.userRepository.findOne(id);
  }
  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
