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
  findOneById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(ContactInformation)
    private readonly contactInfoRepository: Repository<ContactInformation>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const UserContactInfo = await this.contactInfoRepository.create(
      new MapUserDto(createUserDto).returnUserContactInfo(),
    );

    return await this.userRepository.save(
      new MapUserDto(createUserDto).returnUser(UserContactInfo),
    );
  }

  findAll() {
    return this.userRepository.find({ relations: ['contactInfo'] });
  }

  findOne(email: string): Promise<User> {
    return this.userRepository.findOne({ email: email });
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
