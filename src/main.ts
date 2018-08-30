import {NestFactory} from '@nestjs/core';
import {AppModule} from 'app.module';
import 'reflect-metadata';
import {HttpExceptionFilter} from 'com/sww/study/core/exception/http-exception.filter';
import * as fs from 'fs';
import {Logger} from '@nestjs/common/services/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}

bootstrap();
