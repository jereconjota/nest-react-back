import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // this is for validation of DTOs
  app.enableCors(); 
  app.setGlobalPrefix('api'); 
  await app.listen(3000);
}
bootstrap();
