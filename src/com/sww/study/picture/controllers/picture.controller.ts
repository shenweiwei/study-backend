import {
  Get,
  Post,
  Controller,
  Param,
  Delete,
  Put,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Logger
} from '@nestjs/common';
import {PictureService} from '../services/picture.service';
import {PictureDTO} from '../dto/picture.dto';
import {Picture} from '../entitys/picture.entity';
import {RequestBody} from '../../core/decorators/http/request-body.decorator';
import {FileService} from 'com/sww/study/common/services/file.service';
import { BeanUtil } from '../../common/utils/bean.util';

@Controller('study/picture')
export class PictureController {
  constructor(private readonly pictureService : PictureService) {}

  @Get('findAll')
  async getPictureList() : Promise < PictureDTO[] > {
    return await this
      .pictureService
      .getPictureList();
  }

  @Get('fileId/:fileId')
  async findPicture(@Param('fileId')fileId : string) : Promise < PictureDTO > {
    return await this
      .pictureService
      .getPicture(fileId);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPicture(@UploadedFile()file, @RequestBody()pictureDto : PictureDTO) : Promise < string > {
    return await this
      .pictureService
      .savePicture(file);
  }

  @Put('fileId/:fileId')
  async updatePicture(@Param('fileId')fileId : number, @RequestBody()pictureDto : PictureDTO) : Promise < boolean > {
    return await this
      .pictureService
      .updatePicture(fileId, pictureDto);
  }

  @Delete('fileId/:fileId')
  async deletePicture(@Param('fileId')fileId : number) : Promise < boolean > {
    return await this
      .pictureService
      .deletePicture(fileId);
  }
}