import * as dotenv from 'dotenv'; 
dotenv.config();

import { DataSource } from 'typeorm';
import { Book } from './entity/Book';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'pajo_db',
    synchronize: true,
    logging: false,
    entities: [Book],
    subscribers: [],
    migrations: [],
})
