import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS aktivieren, falls du Anfragen von anderen Domains erlauben willst (z. B. vom Frontend)
  app.enableCors();

  // Railway PORT setzen oder Fallback auf 3000
  const port = process.env.PORT || 3000;

  await app.listen(port, () => {
    console.log(`🚀 Server läuft auf http://localhost:${port} oder Railway-Port: ${port}`);
  });
}
bootstrap();
