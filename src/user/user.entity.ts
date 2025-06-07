
import { Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  @Column()
  email: string;

  @Column({ type: 'varchar', length: 15, nullable: true})
  mobileNumber: string;

  @Column()
  gender: string

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean;

  @Column({ type : 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;
}
