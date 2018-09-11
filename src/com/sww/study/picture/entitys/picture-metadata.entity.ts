import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { BaseObjectEntity } from 'com/sww/study/common/entitys/base-object.entity';

@Entity()
export class PictureMetadata extends BaseObjectEntity {

  /**
   * 主键
   *
   * @type {number}
   * @memberof Student
   */
  @PrimaryGeneratedColumn()
  id : number;

  /**
   * 图片名
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  name : string;

  /**
   * 图片的唯一名称
   *
   * @type {string}
   * @memberof Picture
   */
  @Column()
  fileId : string;

  /**
   * 图片网络路径
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  fileUri : string;

  /**
   * 图片描述
   *
   * @type {string}
   * @memberof Student
   */
  @Column({nullable: true})
  describe : string;

  /**
   * 图片类型
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  suffixName : string;

  static create() {
    return new PictureMetadata();
  }
}