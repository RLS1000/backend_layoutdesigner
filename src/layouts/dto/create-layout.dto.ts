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

  @IsString() // ❗ Name1 ist **Pflicht**, weil das Layout ihn braucht
  name1: string;

  @IsString() // ❗ Name2 ist **Pflicht**, weil das Layout ihn braucht
  name2: string;

  @IsOptional()
  @IsString() // ✅ Name3 ist optional (ersetzt Name1 + Name2 falls vorhanden)
  name3?: string;

  @IsDateString() // ❗ EventDate ist **Pflicht**, weil das Layout ihn braucht
  eventDate: string;

  @IsOptional()
  @IsJSON() // 🛑 Hier bleibt `layoutData` erstmal leer (wird erst später gespeichert)
  layoutData?: object;

  @IsOptional()
  @IsJSON() // ✅ Original-Layout bleibt gespeichert (falls Reset nötig ist)
  originalLayoutData?: object;

  @IsOptional()
  @IsJSON() // ✅ Falls der Kunde eigene Bilder hochlädt
  uploadedImages?: object;
}