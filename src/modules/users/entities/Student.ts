import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ContactInformation } from './contactInfo.entity';
import { User } from './user.entity';

@Entity('Student')
export class Student extends User {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @OneToOne(() => ContactInformation)
  @JoinColumn()
  contactInfo: ContactInformation;
}
