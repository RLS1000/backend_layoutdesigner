import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Layout } from './layout.entity';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class LayoutService {
  constructor(
    @InjectRepository(Layout)
    private readonly layoutRepository: Repository<Layout>,
  ) {}

  async findAll(): Promise<Layout[]> {
    return this.layoutRepository.find();
  }

  async findOne(id: string): Promise<Layout | null> { // ✅ "null" als möglichen Rückgabewert hinzufügen
    return this.layoutRepository.findOneBy({ id }) || null;
  }

  async create(layoutData: Partial<Layout>): Promise<Layout> {
    const newLayout = this.layoutRepository.create(layoutData);
    return this.layoutRepository.save(newLayout);
  }

  async update(id: string, updateLayoutDto: UpdateLayoutDto): Promise<Layout> {
    const layout = await this.layoutRepository.findOneBy({ id });
  
    if (!layout) {
      throw new NotFoundException(`Layout mit ID ${id} nicht gefunden`);
    }
  
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


}