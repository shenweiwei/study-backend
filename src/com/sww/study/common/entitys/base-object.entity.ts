import {Logger} from '@nestjs/common/services/logger.service';
import { Column,  VersionColumn,  CreateDateColumn,  UpdateDateColumn, BaseEntity} from 'typeorm';

export abstract class BaseObjectEntity extends BaseEntity{
  @Column()
  valid : number;
  @VersionColumn()
  version : number;
  @Column({nullable:true})
  remark : string;
  @Column()
  createBy : string;
  @CreateDateColumn()
  createDate : Date;
  @Column({nullable:true})
  updateBy : string;
  @UpdateDateColumn({nullable:true})
  updateDate : Date;

  /**
   * 把对象转换成字符串对象
   *
   * @returns {string}
   * @memberof BaseDTO
   */
  toString() : string {
    const pojo = JSON.stringify(this);
    Logger.log(pojo);
    return pojo;
  }

  /**
   * 这里的clone方法不针对前台传输过来的dto对象
   * 仅针对自动创建的dto对象
   *
   * @template T
   * @returns {T}
   * @memberof BaseDTO
   */
  clone < T > () : T {
    return JSON.parse(JSON.stringify(this));
  }
}