import { Controller, Get } from '@nestjs/common';

@Controller('layouts')
export class LayoutsController {
  @Get()
  getAllLayouts() {
    return [
      { id: 1, name: 'Layout 1', createdAt: new Date() },
      { id: 2, name: 'Layout 2', createdAt: new Date() },
    ];
  }
}
