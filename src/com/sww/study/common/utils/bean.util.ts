import {Logger} from '@nestjs/common/services/logger.service';
import * as underscore from 'underscore';
import * as Q from 'q';

export class BeanUtil {

  /**
   * 把对象转换成字符串对象
   *
   * @returns {string}
   * @memberof BaseDTO
   */
  static toString < T > (source : T) : string {
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
  static clone < T > (source : T) : T {
    return JSON.parse(JSON.stringify(source));
  }

  /**
   * 对象转换映射
   *
   * @static
   * @template T
   * @param {T} source 源对象
   * @param {T} target 目标对象
   * @returns {T}
   * @memberof BeanUtil
   */
  static async map<T>(source : T, target : any) : Promise<T> {
    const deferred = Q.defer();
    const targetObject = JSON.parse(JSON.stringify(source));
    target = new target();
    const allkeys  = underscore.allKeys(target);

    await allkeys.forEach((key) => {
      key = key.substr(1,key.length);
      target[key] = targetObject[key];
    });
    console.log(JSON.stringify(target));

    deferred.resolve(target);

    return deferred.promise;
  }
}