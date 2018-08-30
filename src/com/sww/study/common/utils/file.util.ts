import * as fs from 'fs';
import * as path from 'path';
import {Logger} from '@nestjs/common/services/logger.service';
import {Injectable} from '@nestjs/common';
import {ConfigService} from '../services/config.service';
import {SystemUtil} from './system.util';
import {SystemConstant} from '../constants/system.constant';

@Injectable()
export class FileUtil {
    constructor(private config : ConfigService) {}

    wirteFile(data) : void {
        const basePath = this.getBasePath();
        this.mkdirs(basePath, () => {
            const filePath = `${basePath}/${data.originalname}.png`;
            fs.writeFile(filePath, data.buffer, {
                flag: 'w',
                encoding: 'utf-8',
                mode: '0666'
            }, (err) => {
                if (err) {
                    Logger.log('文件写入失败');
                    return false;
                } else {
                    Logger.log('文件写入成功');
                    return true;
                }

            });
        });

    }

    getBasePath() : string {
        const system = SystemUtil.getCurrentSystem();
        if (SystemConstant.WINDOWS === system) {
            return this
                .config
                .get('WINDOW_FILE_PATH');
        } else {
            return this
                .config
                .get('LINUX_FILE_PATH');
        }
    }
    
    /**
     * 递归创建目录 异步方法
     *
     * @param {*} dirname
     * @param {*} callback
     * @memberof FileUtil
     */
    mkdirs(dirname, callback) {
        fs.exists(dirname, (exists) => {
            if (exists) {
                callback();
            } else {
                this.mkdirs(path.dirname(dirname), () => {
                    fs.mkdir(dirname, callback);
                    Logger.log(`在${path.dirname(dirname)}目录创建好 ${dirname}目录`);
                });
            }
        });
    }
    
    /**
     * 递归创建目录 同步方法
     *
     * @param {*} dirname
     * @returns
     * @memberof FileUtil
     */
    mkdirsSync(dirname) {
        if (fs.existsSync(dirname)) {
            return true;
        } else {
            if (this.mkdirsSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                return true;
            }
        }
    }
}