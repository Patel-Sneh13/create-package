import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { User } from '../entity/User.ts';
import { Post } from '../entity/Post.ts';
import { Profile } from '../entity/Profile.ts';

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sneh",
    password: "ghost",
    database: "Demo1",
    synchronize: true,
    entities: [User,Profile,Post],
    logging: true,
    options: {
        trustServerCertificate: true
    }
})