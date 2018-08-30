import {Injectable, Logger} from '@nestjs/common';
import {Picture} from '../entitys/picture.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, DeleteResult, UpdateResult} from 'typeorm';
import {PictureDTO} from '../dto/picture.dto';
import {FileService} from '../../common/services/file.service';
import {FileTypeConstant} from 'com/sww/study/common/constants/file-type.constant';
import {BeanUtil} from 'com/sww/study/common/utils/bean.util';

@Injectable()
export class PictureService {
  constructor(@InjectRepository(Picture)private readonly pictureRepository : Repository < Picture >, private fileService : FileService) {}

  /**
   * 根据ID获取图片对象
   *
   * @param {string} fileId
   * @returns {Promise<PictureDTO>}
   * @memberof PictureService
   */
  async getPicture(fileId : string) : Promise < PictureDTO > {
    const picture = await this
      .pictureRepository
      .findOne({fileId: fileId});

    return await BeanUtil.map(picture, PictureDTO);
  }

  /**
   * 获取所有图片列表
   *
   * @returns {Promise<Picture[]>}
   * @memberof PictureService
   */
  async getPictureList() : Promise < PictureDTO[] > {
    const pictureList = await this
      .pictureRepository
      .find()
    return await BeanUtil.mapList(pictureList, PictureDTO);;
  }

  /**
   * 保存图片对象
   *
   * @param {PictureDTO} picturedto
   * @returns {Promise<number>}
   * @memberof PictureService
   */
  async savePicture(file) : Promise < string > {
    const picture = Picture.create();

    await this
      .fileService
      .wirteFile(file, FileTypeConstant.PNG)
      .then((fileId : string) => {
        picture.fileId = fileId;
        picture.fileUri = fileId;
      });

    picture.name = file.originalname;
    picture.suffixName = FileTypeConstant.PNG;
    picture.describe = '';

    await this
      .pictureRepository
      .save(picture);

    return picture.fileId;
  }

  /**
   * 更新图片对象
   *
   * @param {number} id
   * @param {PictureDTO} picturedto
   * @returns {Promise<boolean>}
   * @memberof PictureService
   */
  async updatePicture(id : number, picturedto : PictureDTO) : Promise < boolean > {
    const picture: Picture = picturedto.clone();
    return await this
      .pictureRepository
      .update(id, picture)
      .then((result : UpdateResult) => {
        return true;
      });
  }

  /**
   * 根据ID删除图片对象
   *
   * @param {number} id
   * @returns {Promise<boolean>}
   * @memberof PictureService
   */
  async deletePicture(id : number) : Promise < boolean > {
    return await this
      .pictureRepository
      .delete(id)
      .then((result : DeleteResult) => {
        return true;
      });
  }
}
