import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Layout } from './layout.entity';
import { LayoutController } from './layouts.controller';
import { LayoutService } from './layouts.service';
import { DeepLinkService } from '../services/deeplink.service'; // ✅ Importiere den Service

@Module({
  imports: [TypeOrmModule.forFeature([Layout])],
  controllers: [LayoutController],
  providers: [LayoutService],
})
export class LayoutsModule {}
