import { BaseEntity } from '../../common/entitys/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Picture extends BaseEntity{

  /**
   * 主键
   *
   * @type {number}
   * @memberof Student
   */
  @PrimaryGeneratedColumn('increment')
  id: number;

  /**
   * 图片名
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  name: string;

  /**
   * 图片网络路径
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  fileUri: string;

  /**
   * 图片描述
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  describe: string;

  /**
   * 图片类型
   *
   * @type {string}
   * @memberof Student
   */
  @Column()
  suffixName: string;

  static create(){
    return new Picture();
  }
}