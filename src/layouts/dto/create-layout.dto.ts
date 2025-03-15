import { IsOptional, IsString, IsEmail, IsDateString, IsJSON } from 'class-validator';

export class CreateLayoutDto {
  @IsOptional()
  @IsString()
  orderId?: string;

  @IsOptional()
  @IsEmail()
  customerEmail?: string;

  @IsOptional()
  @IsString()
  customerFirstName?: string;

  @IsOptional()
  @IsString()
  customerLastName?: string;

  @IsOptional()
  @IsDateString()
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
