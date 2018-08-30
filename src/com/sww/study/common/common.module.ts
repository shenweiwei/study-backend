import {BaseEntity} from './entitys/base.entity';
import {Module} from '@nestjs/common';
import {FileUtil} from './utils/file.util';
import {ConfigService} from './services/config.service';

const POJO_LIST = [];

@Module({
  imports: [],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV}.env`)
    },
    FileUtil
  ],
  exports: [FileUtil, ConfigService]
})
export class CommonModule {}