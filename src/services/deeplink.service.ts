import { Injectable } from '@nestjs/common';

@Injectable()
export class DeepLinkService {
  generateDeepLink(layoutId: string): string {
    return `https://yourdomain.com/layout/${layoutId}`;
  }
}
