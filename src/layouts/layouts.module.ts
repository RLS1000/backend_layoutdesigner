import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Layout } from './layout.entity';
import { LayoutsController } from './layouts.controller';
import { LayoutService } from './layouts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Layout])],
  controllers: [LayoutsController],
  providers: [LayoutsService],
})
export class LayoutsModule {}
