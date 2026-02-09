import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { User } from '../entity/User.ts';

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sneh",
    password: "ghost",
    database: "Demo1",
    synchronize: true,
    entities: [User],
    logging: true,
    options: {
        trustServerCertificate: true
    }
})