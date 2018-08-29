import { Injectable, Logger } from '@nestjs/common';
import { Picture } from '../entitys/picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { PictureDTO } from '../dto/picture.dto';
import * as fs from 'fs';

@Injectable()
export class PictureService {
  constructor(@InjectRepository(Picture) private readonly pictureRepository: Repository<Picture>) {}

  /**
   * 根据ID获取图片对象
   *
   * @param {number} id
   * @returns {Promise<Picture>}
   * @memberof PictureService
   */
  async getPicture(id: number): Promise<Picture>{
    return await this.pictureRepository.findOne(id);
  }

  /**
   * 获取所有图片列表
   *
   * @returns {Promise<Picture[]>}
   * @memberof PictureService
   */
  async getPictureList(): Promise<Picture[]>{
    return await this.pictureRepository.find();
  }

  /**
   * 保存图片对象
   *
   * @param {PictureDTO} picturedto
   * @returns {Promise<number>}
   * @memberof PictureService
   */
  async savePicture(file): Promise<number>{
    await this.wirteFile(file);

    const picture = Picture.create();
    picture.name = file.originalname;
    picture.suffixName = 'png';
    picture.describe = '';

    return await this.pictureRepository.save(picture).then((result: Picture) => {
      return result.id;
    });
  }

  /**
   * 更新图片对象
   *
   * @param {number} id
   * @param {PictureDTO} picturedto
   * @returns {Promise<boolean>}
   * @memberof PictureService
   */
  async updatePicture(id: number, picturedto: PictureDTO): Promise<boolean>{
    const picture: Picture = picturedto.clone();
    return await this.pictureRepository.update(id, picture).then((result: UpdateResult) => {
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
  async deletePicture(id: number): Promise<boolean>{
    return await this.pictureRepository.delete(id).then((result: DeleteResult) => {
      return true;
    });
  }

  wirteFile(data){
    const filePath = './' + data.originalname + '.png';
    fs.writeFile(filePath, data.buffer, { flag: 'w', encoding: 'utf-8', mode: '0666' }, (err) => {
      if (err) {
        Logger.log('文件写入失败');
      } else {
        Logger.log('文件写入成功');
      }
    });
  }
}
