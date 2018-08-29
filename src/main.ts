import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import 'reflect-metadata';
import { HttpExceptionFilter } from 'com/sww/study/core/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
