import {NestFactory} from '@nestjs/core';
import {AppModule} from 'app.module';
import 'reflect-metadata';
import {HttpExceptionFilter} from 'com/sww/study/core/exception/http-exception.filter';
import * as fs from 'fs';
import {Logger} from '@nestjs/common/services/logger.service';

// 设置配置文件
const setEnv = (envPath: string) => {
  fs.readFile(envPath, 'utf8', (err, data) => {
    const filePath = './src/env/env.ts';
    fs.writeFile(filePath, data, {
      flag: 'w',
      encoding: 'utf-8',
      mode: '0666',
    }, (error) => {
      if (error) {
        Logger.log('配置文件写入失败');
      } else {
        Logger.log('配置文件写入成功');
      }
    });
  });
};

async function bootstrap() {
  // 根据环境生成配置文件
  if (process.env.NODE_ENV === 'production') {
    await setEnv('./src/env/prod.env.ts');
  } else {
    await setEnv('./src/env/dev.env.ts');
  }

  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}

bootstrap();
