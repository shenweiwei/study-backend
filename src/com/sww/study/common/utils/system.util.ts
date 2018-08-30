import {SystemConstant} from '../constants/system.constant';
export class SystemUtil {
    static getCurrentSystem() : string {
        const platform: string = process
            .platform
            .toString();

        if (SystemConstant.WINDOWS_TYPE.indexOf(platform) >= 0) {
            return SystemConstant.WINDOWS;
        } else if (SystemConstant.LINUX_TYPE.indexOf(platform) >= 0) {
            return SystemConstant.LINUX;
        } else {
            return SystemConstant.WINDOWS;
        }
    }
}