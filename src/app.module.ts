import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { LayoutsModule } from './layouts/layouts.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(), // Lädt die .env Datei
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Lädt die Datenbank-URL aus der .env Datei
      autoLoadEntities: true,
      synchronize: true, // Nur in Entwicklung verwenden!
    }),
  ],
})
export class AppModule {}
