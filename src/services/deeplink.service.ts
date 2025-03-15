import { Injectable } from '@nestjs/common';

@Injectable()
export class DeepLinkService {
  generateDeepLink(layoutId: string): string {
    return `https://frontendlayoutdesigner-production.up.railway.app/?id=${layoutId}`;
}
}
