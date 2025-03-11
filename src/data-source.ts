import { DataSource } from 'typeorm';
import { Layout } from './layouts/layout.entity'; // Muss mit dem Dateinamen übereinstimmen

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL, // Von Railway laden
    entities: [Layout], // Alle Entities hier einfügen
    synchronize: false, // Muss auf "false" sein, wenn du Migrationen nutzt
    migrations: ['src/migrations/*.ts'],
});
