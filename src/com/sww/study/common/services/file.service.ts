import * as fs from 'fs';
import {Injectable, Logger} from "@nestjs/common";
import {FileUtil} from '../utils/file.util';

@Injectable()
export class FileService {
    constructor(private fileUtil : FileUtil) {}

    wirteFile(data, type?: string) : void {
        const basePath = this
            .fileUtil
            .getBasePath();
        this
            .fileUtil
            .mkdirs(basePath, () => {
                const filePath = `${basePath}/${data.originalname}${(!type?'':type)}`;
                fs.writeFile(filePath, data.buffer, {
                    flag: 'w',
                    encoding: 'utf-8',
                    mode: '0666'
                }, (err) => {
                    if (err) {
                        Logger.log(`文件:${filePath},写入失败`);
                        return false;
                    } else {
                        Logger.log(`文件:${filePath},写入成功`);
                        return true;
                    }

                });
            });
    }

    readFile() : void {}
}