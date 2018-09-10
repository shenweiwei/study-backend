import {Controller, Get} from "@nestjs/common";
import { UserDTO } from "com/sww/study/user/dto/user.dto";

@Controller('study/picture')
export class UserController {

    @Get('findAll')
    async getUserist() : Promise < UserDTO[] > {
        return await this
            .pictureService
            .getPictureList();
    }
}