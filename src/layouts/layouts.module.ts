import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Layout } from './layout.entity';
import { LayoutService } from './layouts.service';
import { LayoutController } from './layouts.controller';
import { ServicesModule } from '../services/services.module'; // ✅ Importiert

@Module({
  imports: [TypeOrmModule.forFeature([Layout]), ServicesModule], // ✅ ServicesModule hinzugefügt
  providers: [LayoutService],
  controllers: [LayoutController],
  exports: [LayoutService],
})
export class LayoutsModule {}