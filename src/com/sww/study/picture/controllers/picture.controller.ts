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

@Controller('study/picture')
export class PictureController {
  constructor(private readonly pictureService : PictureService) {}

  @Get('findAll')
  async getPictureList() : Promise < Picture[] > {
    return await this
      .pictureService
      .getPictureList();
  }

  @Get('id/:id')
  async getPicturePicture(@Param('id')id : number) : Promise < Picture > {
    return await this
      .pictureService
      .getPicture(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPicture(@UploadedFile()file, @RequestBody()pictureDto : PictureDTO) : Promise < number > {
    return await this
      .pictureService
      .savePicture(file);
  }

  @Put('id/:id')
  async updatePicture(@Param('id')id : number, @RequestBody()pictureDto : PictureDTO) : Promise < boolean > {
    return await this
      .pictureService
      .updatePicture(id, pictureDto);
  }

  @Delete('id/:id')
  async deletePicture(@Param('id')id : number) : Promise < boolean > {
    return await this
      .pictureService
      .deletePicture(id);
  }
}