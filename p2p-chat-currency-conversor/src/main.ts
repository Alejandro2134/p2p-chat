import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    methods: '*',
    exposedHeaders: '*',
  });
  await app.listen(3002);
}
bootstrap();
