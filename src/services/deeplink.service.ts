import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class DeepLinkService {
  generateDeepLink(layoutId: string): string {
    return `https://your-frontend-domain/layout/${layoutId}`;
  }
}
