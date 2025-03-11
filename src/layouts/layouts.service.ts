import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Layout } from './layout.entity';

@Injectable()
export class LayoutService {
  constructor(
    @InjectRepository(Layout)
    private readonly layoutRepository: Repository<Layout>,
  ) {}

  async findAll(): Promise<Layout[]> {
    return this.layoutRepository.find();
  }

  async findOne(id: string): Promise<Layout> {
    return this.layoutRepository.findOneBy({ id });
  }

  async create(layoutData: Partial<Layout>): Promise<Layout> {
    const newLayout = this.layoutRepository.create(layoutData);
    return this.layoutRepository.save(newLayout);
  }
}