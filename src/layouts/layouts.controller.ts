import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LayoutService } from './layouts.service';
import { Layout } from './layout.entity';

@Controller('layouts')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}

  @Get()
  async getAllLayouts(): Promise<Layout[]> {
    return this.layoutService.findAll();
  }

  @Get(':id')
async findOne(@Param('id') id: string): Promise<Layout | null> { // 🛠 Fix: "null" als möglichen Rückgabewert erlauben
    return this.layoutService.findOne(id);
}


  @Post()
  async createLayout(@Body() layoutData: Partial<Layout>): Promise<Layout> {
    return this.layoutService.create(layoutData);
  }
}
