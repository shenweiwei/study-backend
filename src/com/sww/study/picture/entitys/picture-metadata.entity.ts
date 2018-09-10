import {BaseEntity} from '../../common/entitys/base.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import {User} from '../../user/entitys/user.entity';

@Entity()
export class PictureMetadata extends BaseEntity {

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