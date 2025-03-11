import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { LayoutService } from './layouts.service';
import { Layout } from './layout.entity';
import { UpdateLayoutDto } from './dto/update-layout.dto';

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

  @Put(':id')
  updateLayout(@Param('id') id: string, @Body() updateLayoutDto: UpdateLayoutDto) {
  return this.layoutService.update(id, updateLayoutDto);
  }

  @Post()
  async createLayout(@Body() layoutData: Partial<Layout>): Promise<Layout> {
    return this.layoutService.create(layoutData);
  }
}
