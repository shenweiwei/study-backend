import { Module } from '@nestjs/common';
import { PictureService } from './services/picture.service';
import { PictureController } from './controllers/picture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entitys/picture.entity';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Picture]),
    CommonModule
  ],
  controllers: [PictureController],
  providers: [PictureService],
})
export class PictureModule {
}