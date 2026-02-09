import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User.ts";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  country!: string;

  @Column()
  age!: number;

  @Column({ nullable: true })
  bio!: string;

  @OneToOne(() => User, "profile")
  @JoinColumn()
  user!: User;
}
