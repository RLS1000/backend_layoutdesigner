import { Injectable } from '@nestjs/common';

@Injectable()
export class DeepLinkService {
  generateDeepLink(layoutId: string): string {
    return `https://backendlayoutdesigner-production.up.railway.app/layout/${layoutId}`;
  }
}
