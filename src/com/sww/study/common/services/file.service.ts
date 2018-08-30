import * as fs from 'fs';
import * as uuid from 'uuid';
import * as Q from 'q';
import {Injectable, Logger} from "@nestjs/common";
import {FileUtil} from '../utils/file.util';
import * as moment from 'moment'

@Injectable()
export class FileService {
    constructor(private fileUtil : FileUtil) {}

    async wirteFile(data, type?: string) : Promise < string > {
        const deferred = Q.defer();
        const uniqueKey: string = (uuid.v1()as string).replace(/-/g, '');
        const currentDate: string = moment().format('YYYY-MM-DD');
        const basePath = `${this
            .fileUtil
            .getBasePath()}/${currentDate}`;
        const filePath = `${basePath}/${uniqueKey}${ (!type
            ? ''
            : `.${type}`)}`;

        Logger.log(filePath);

        await this
            .fileUtil
            .mkdirs(basePath, () => {
                fs.writeFile(filePath, data.buffer, {
                    flag: 'w',
                    encoding: 'utf-8',
                    mode: '0666'
                }, (err) => {
                    if (err) {
                        Logger.log(`文件:${filePath},写入失败`);
                        deferred.reject();
                    } else {
                        Logger.log(`文件:${filePath},写入成功`);
                        deferred.resolve(`${currentDate}/${uniqueKey}${ (!type
                            ? ''
                            : `.${type}`)}`);
                    }

                });
            });

        return deferred.promise;
    }

    readFile() : void {}
}