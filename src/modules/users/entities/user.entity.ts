import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from '../UserRole';
import { ContactInformation } from './contactInfo.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;
  @OneToOne(() => ContactInformation)
  @JoinColumn()
  contactInfo: ContactInformation;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;
}
