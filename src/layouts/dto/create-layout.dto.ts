export class CreateLayoutDto {
    orderId?: string;
    customerEmail?: string;
    customerFirstName?: string;
    customerLastName?: string;
    eventDate?: Date;
    layoutData?: string;  // Falls das Frontend JSON-Strings sendet
    originalLayoutData?: string;
    uploadedImages?: string;
  }
  