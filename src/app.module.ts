import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Layout } from './layouts/layout.entity'; // 🛠️ Dein Layout-Entity importieren
import { LayoutsModule } from './layouts/layouts.module';


@Module({
  imports: [
    ConfigModule.forRoot(), // 🔹 Lädt Variablen aus .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // 🎯 DB-URL aus Railway
      autoLoadEntities: true,
      synchronize: true, // 🛑 Nur für Entwicklung aktivieren
      logging: true, // 🔍 Zeigt SQL-Logs zur Fehleranalyse
    }),
    TypeOrmModule.forFeature([Layout]), // 🏗️ Layout-Entity registrieren
    LayoutsModule, // 📌 Modul importieren
  ],
})
export class AppModule {}
