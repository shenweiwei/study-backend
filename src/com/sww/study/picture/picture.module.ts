import {Module} from '@nestjs/common';
import {PictureService} from './services/picture.service';
import {PictureController} from './controllers/picture.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommonModule} from '../common/common.module';
import {Picture} from 'com/sww/study/picture/entitys/picture.entity';
import {PictureMetadata} from './entitys/picture-metadata.entity';
import {Position} from './entitys/position.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Picture, PictureMetadata, Position]),
    CommonModule
  ],
  controllers: [PictureController],
  providers: [PictureService]
})
export class PictureModule {}