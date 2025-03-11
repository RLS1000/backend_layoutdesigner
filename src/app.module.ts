import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
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
