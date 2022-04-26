import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ContactInformation')
export class ContactInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  telephone: string;

  @Column()
  street: string;

  @Column()
  placeNumber: string;

  @Column()
  city: string;
}
