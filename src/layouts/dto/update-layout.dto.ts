import { PartialType } from '@nestjs/mapped-types';
import { CreateLayoutDto } from './create-layout.dto';
import { IsOptional, IsString, IsJSON } from 'class-validator';

export class UpdateLayoutDto extends PartialType(CreateLayoutDto) {
  @IsOptional()
  @IsString()
  eventDate?: string;

  @IsOptional()
  @IsJSON()
  layoutData?: object;

  @IsOptional()
  @IsJSON()
  originalLayoutData?: object;

  @IsOptional()
  @IsJSON()
  uploadedImages?: object;
}
