import { Module } from '@nestjs/common';
import { PictureService } from './services/picture.service';
import { PictureController } from './controllers/picture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entitys/picture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [PictureController],
  providers: [PictureService],
})
export class PictureModule {
}