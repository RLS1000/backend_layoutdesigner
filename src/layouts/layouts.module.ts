import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Layout } from './layout.entity';
import { LayoutService } from './layouts.service';
import { LayoutController } from './layouts.controller';
import { DeepLinkService } from '../services/deeplink.service'; // 🆕 Import des DeepLinkService

@Module({
  imports: [TypeOrmModule.forFeature([Layout])],
  controllers: [LayoutController],
  providers: [LayoutService],
})
export class LayoutsModule {}
