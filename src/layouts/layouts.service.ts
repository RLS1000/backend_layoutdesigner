import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Layout } from './layout.entity';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { DeepLinkService } from '../services/deeplink.service'; // ✅ Importiert

@Injectable()
export class LayoutService {
  constructor(
    @InjectRepository(Layout)
    private readonly layoutRepository: Repository<Layout>,
    private readonly deepLinkService: DeepLinkService // ✅ Injectiert
  ) {}

  async findAll(): Promise<Layout[]> {
    return this.layoutRepository.find();
  }

  async findOne(id: string): Promise<Layout | null> {
    return this.layoutRepository.findOneBy({ id }) || null;
  }

  async create(layoutData: Partial<Layout>): Promise<Layout> {
    console.log("🔹 Empfangene Daten beim Erstellen:", layoutData);

    // JSON-Felder umwandeln
    this.convertJsonFields(layoutData);

    // Layout erstellen und speichern
    const newLayout = this.layoutRepository.create(layoutData);
    await this.layoutRepository.save(newLayout);

    // Deeplink generieren & speichern
    newLayout.deepLink = this.deepLinkService.generateDeepLink(newLayout.id);
    return this.layoutRepository.save(newLayout);
  }

  async update(id: string, updateLayoutDto: UpdateLayoutDto): Promise<Layout> {
    console.log("🔹 Update für Layout ID:", id, "Daten:", updateLayoutDto);

    const layout = await this.layoutRepository.findOneBy({ id });
    if (!layout) {
      throw new NotFoundException(`Layout mit ID ${id} nicht gefunden`);
    }

    // JSON-Felder umwandeln
    this.convertJsonFields(updateLayoutDto);
    
    Object.assign(layout, updateLayoutDto);
    return this.layoutRepository.save(layout);
  }

  async remove(id: string): Promise<boolean> {
    const layout = await this.layoutRepository.findOneBy({ id });
    if (!layout) {
      throw new NotFoundException(`Layout mit ID ${id} nicht gefunden`);
    }

    const result = await this.layoutRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }

  /**
   * 💡 Hilfsfunktion zur Umwandlung von JSON-Strings in echte Objekte
   */
  private convertJsonFields(data: Partial<Layout>) {
    try {
      if (typeof data.layoutData === 'string') {
        data.layoutData = JSON.parse(data.layoutData);
      }
      if (typeof data.originalLayoutData === 'string') {
        data.originalLayoutData = JSON.parse(data.originalLayoutData);
      }
      if (typeof data.uploadedImages === 'string') {
        data.uploadedImages = JSON.parse(data.uploadedImages);
      }
    } catch (error) {
      throw new BadRequestException('Ungültiges JSON-Format in layoutData, originalLayoutData oder uploadedImages');
    }
  }
}
