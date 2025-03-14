import { IsOptional, IsString, IsJSON } from 'class-validator';

export class CreateLayoutDto {
    @IsOptional()
    @IsString()
    orderId?: string;

    @IsOptional()
    @IsString()
    customerEmail?: string;

    @IsOptional()
    @IsString()
    customerFirstName?: string;

    @IsOptional()
    @IsString()
    customerLastName?: string;

    @IsOptional()
    @IsString()
    eventDate?: string;  // Falls du Date-Objekte erwartest, passe dies entsprechend an

    @IsOptional()
    @IsJSON()
    layoutData?: object | string;

    @IsOptional()
    @IsJSON()
    originalLayoutData?: object | string;

    @IsOptional()
    @IsJSON()
    uploadedImages?: object | string;
}
