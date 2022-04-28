import * as argon2 from 'argon2';
import {
  BeforeInsert,
  BeforeUpdate,
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

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @OneToOne(() => ContactInformation)
  @JoinColumn()
  contactInfo: ContactInformation;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    try {
      const hash = await argon2.hash(this.password);
      this.password = hash;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
