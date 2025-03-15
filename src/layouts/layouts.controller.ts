import { Controller, Get, Post, Put, Body, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { LayoutService } from './layouts.service';
import { Layout } from './layout.entity';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { DeepLinkService } from '../services/deeplink.service'; // Service für Deeplink-Generierung

@Controller('layouts')
export class LayoutController {
  constructor(
    private readonly layoutService: LayoutService,
    private readonly deepLinkService: DeepLinkService, // Deeplink Service injizieren
  ) {}

  @Get()
  async getAllLayouts(): Promise<Layout[]> {
    return this.layoutService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Layout | null> {
    const layout = await this.layoutService.findOne(id);
    if (!layout) throw new NotFoundException('Layout nicht gefunden.');
    return layout;
  }

  @Put(':id')
  async updateLayout(@Param('id') id: string, @Body() updateLayoutDto: UpdateLayoutDto): Promise<Layout> {
    return this.layoutService.update(id, updateLayoutDto);
  }

  @Post()
  async createLayout(@Body() layoutData: Partial<Layout>): Promise<Layout> {
    return this.layoutService.create(layoutData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const layout = await this.layoutService.findOne(id);
    if (!layout) throw new NotFoundException('Layout nicht gefunden.');
    
    await this.layoutService.remove(id);
    return { message: 'Layout erfolgreich gelöscht' };
  }

  /**
   * 📌 **Erstellt einen Deeplink für ein neues Layout**
   * Endpoint: `POST /layouts/generate-deeplink`
   */
  @Post('generate-deeplink')
  async generateDeepLink(@Body() data: { customerEmail: string; customerFirstName: string; customerLastName: string; eventDate: string }) {
    if (!data.customerEmail || !data.customerFirstName || !data.customerLastName || !data.eventDate) {
      throw new BadRequestException('Alle Felder sind erforderlich (customerEmail, customerFirstName, customerLastName, eventDate)');
    }

    const newLayout = await this.layoutService.create({
      customerEmail: data.customerEmail,
      customerFirstName: data.customerFirstName,
      customerLastName: data.customerLastName,
      eventDate: new Date(data.eventDate),
    });

    const deepLink = this.deepLinkService.generateDeepLink(newLayout.id); // Deeplink generieren
    newLayout.deepLink = deepLink;

    const updateDto: UpdateLayoutDto = {
      ...newLayout,
      layoutData: typeof newLayout.layoutData === 'string' ? JSON.parse(newLayout.layoutData) : newLayout.layoutData,
      originalLayoutData: typeof newLayout.originalLayoutData === 'string' ? JSON.parse(newLayout.originalLayoutData) : newLayout.originalLayoutData,
      uploadedImages: typeof newLayout.uploadedImages === 'string' ? JSON.parse(newLayout.uploadedImages) : newLayout.uploadedImages
     };
      await this.layoutService.update(newLayout.id, updateDto);
  

    return { message: 'Deeplink erstellt', deepLink };
  }
}