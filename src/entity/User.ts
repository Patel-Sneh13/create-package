import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  CreateDateColumn
} from "typeorm";
import { Profile } from "./Profile.ts";
import { Post } from "./Post.ts";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToOne(() => Profile, 'user')
  profile!: Profile;

  @OneToMany(() => Post, post => post.user)
  posts!: Post[];
}
