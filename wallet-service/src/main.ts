import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration CORS pour permettre les requêtes cross-origin
  app.enableCors();
  
  // Préfixe global pour les API
  app.setGlobalPrefix('api/v1');
  
  await app.listen(3000);
  console.log('💰 Wallet Service is running on: http://localhost:3000');
}
bootstrap();