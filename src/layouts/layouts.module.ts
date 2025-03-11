import { Module } from '@nestjs/common';
import { LayoutsController } from './layouts.controller';

@Module({
  controllers: [LayoutsController],
})
export class LayoutsModule {}