import { Logger } from '@nestjs/common/services/logger.service';

export class BeanUtil {
  /**
   * 把对象转换成字符串对象
   *
   * @returns {string}
   * @memberof BaseDTO
   */
  static toString<T>(source: T): string{
    const pojo = JSON.stringify(source);
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
  static clone<T>(source: T): T {
    return JSON.parse(JSON.stringify(source));
  }
}