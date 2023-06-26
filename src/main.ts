import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // this is for validation of DTOs
  app.enableCors(); 
  app.setGlobalPrefix('api'); 

  const port = app.get(ConfigService).get('PORT');
  await app.listen(port || 3000 );
}
bootstrap();
