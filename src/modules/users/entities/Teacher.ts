import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ContactInformation } from './contactInfo.entity';
import { User } from './user.entity';

@Entity('Teacher')
export class Teacher extends User {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  subject: string;

  @Column()
  @OneToOne(() => ContactInformation)
  @JoinColumn()
  contactInfo: ContactInformation;
}
