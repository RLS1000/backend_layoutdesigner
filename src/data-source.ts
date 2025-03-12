import { DataSource } from 'typeorm';
import 'dotenv/config'; // ✅ Lädt die .env-Datei

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // ✅ Holt die Datenbank-URL aus der Umgebung
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false, // ⚠️ Migrations statt Sync
});
