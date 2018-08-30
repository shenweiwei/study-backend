import {Logger} from '@nestjs/common/services/logger.service';
import * as underscore from 'underscore';
import * as Q from 'q';
import {async} from 'rxjs/internal/scheduler/async';

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
   * @param {T} source
   * @param {*} target
   * @returns {Promise<any>}
   * @memberof BeanUtil
   */
  static async map < T > (source : T, target : any) : Promise < any > {
    const deferred = Q.defer();
    const targetObject = JSON.parse(JSON.stringify(source));
    target = new target();
    const allkeys = underscore.allKeys(target);

    await allkeys.forEach((key) => {
      key = key.substr(1, key.length);
      target[key] = targetObject[key];
    });
    console.log(JSON.stringify(target));

    deferred.resolve(target);

    return deferred.promise;
  }

  /**
   *
   *
   * @static
   * @template T
   * @param {T} source
   * @param {*} target
   * @returns {Promise<any>}
   * @memberof BeanUtil
   */
  static async mapList < T > (source : Array < T >, target : any) : Promise < Array < any >> {
    const deferred = Q.defer();
    const sourceObject: Array < T > = JSON.parse(JSON.stringify(source));
    const targetKeys = new target();
    const allkeys = underscore.allKeys(targetKeys);

    const resultArray = new Array < T > ();

    await sourceObject.forEach(async(obj) => {
      const targetObj = new target();
      await allkeys.forEach((key) => {
        key = key.substr(1, key.length);
        targetObj[key] = obj[key];
      });
      resultArray.push(targetObj);
    });

    console.log(JSON.stringify(resultArray));

    deferred.resolve(resultArray);

    return deferred.promise;
  }
}