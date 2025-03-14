import { Injectable } from '@nestjs/common';

@Injectable()
export class DeepLinkService {
  private readonly baseUrl: string = 'https://frontendlayoutdesigner-production.up.railway.app/'; // 🔹 Ersetze mit deiner echten Domain!

  /**
   * 🔗 **Generiert einen Deeplink für ein Layout**
   * Beispiel: `https://frontend.example.com/layout/123e4567-e89b-12d3-a456-426614174000`
   */
  generateDeepLink(layoutId: string): string {
    return `${this.baseUrl}/layout/${layoutId}`;
  }
}
