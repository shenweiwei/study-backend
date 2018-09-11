import {Controller, Get, Post} from "@nestjs/common";
import {UserService} from '../services/user.service';
import {UserDTO} from '../dto/user.dto';
import {RequestBody} from "../../core/decorators/http/request-body.decorator";

@Controller('study/user')
export class UserController {

    constructor(private readonly userService : UserService) {}

    @Get('find/all')
    async findUserAll() : Promise < UserDTO[] > {
        return await this
            .userService
            .getUserAll();
    }

    @Post('find/list')
    async findUserList(@RequestBody()userDTO : UserDTO) : Promise < UserDTO[] > {
        return await this
            .userService
            .getUserByWhere(userDTO);
    }
}