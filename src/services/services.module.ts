import { Module } from '@nestjs/common';
import { DeepLinkService } from './deeplink.service';

@Module({
  providers: [DeepLinkService],
  exports: [DeepLinkService], // 🔹 Exportieren, damit andere Module darauf zugreifen können
})
export class ServicesModule {}
