import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DeepLinkService {
  private baseUrl = 'https://yourdomain.com/layouts'; // Hier deine Domain eintragen

  generateDeepLink(): string {
    const uniqueId = uuidv4();
    return `${this.baseUrl}/${uniqueId}`;
  }
}
