import {Module} from '@nestjs/common';
import {FileUtil} from './utils/file.util';
import {ConfigService} from './services/config.service';
import { FileService } from './services/file.service';

const POJO_LIST = [];

@Module({
  imports: [],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV}.env`)
    },
    FileService,
    FileUtil
  ],
  exports: [FileUtil,FileService, ConfigService]
})
export class CommonModule {}