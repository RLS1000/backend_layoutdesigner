import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LayoutsModule } from './layouts/layouts.module';
import { Layout } from './layouts/layout.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // 🔹 Lädt die .env-Datei mit der DATABASE_URL
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // 🔹 Verbindet sich mit Railway PostgreSQL
      entities: [Layout],
      synchronize: true, // ⚠ Nur in der Entwicklung aktivieren
    }),
    LayoutsModule,
  ],
})
export class AppModule {}
