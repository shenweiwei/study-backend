import {Injectable} from "@nestjs/common/decorators/core/component.decorator";
import {InjectRepository} from "@nestjs/typeorm";
import {UserDTO} from '../dto/user.dto';
import {BeanUtil} from '../../common/utils/bean.util';
import {UserRepository} from '../repositorys/user.repository';
import {User} from "../entitys/user.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserRepository)private readonly userRepository : UserRepository) {}

    /**
     * 查询出用户列表
     *
     * @returns {Promise < UserDTO[] >}
     * @memberof UserService
     */
    async getUserAll() : Promise < UserDTO[] > {
        const userList = await this
            .userRepository
            .find();

        return await BeanUtil.mapList(userList, UserDTO);
    }

    /**
     * 根据主键查询出用户
     *
     * @param {number} id
     * @returns {Promise < UserDTO >}
     * @memberof UserService
     */
    async getUserByPrimaryKey(id : number) : Promise < UserDTO > {
        const user = await this
            .userRepository
            .findOne(id);

        return await BeanUtil.map(user, UserDTO);
    }

    /**
     * 根据条件查询出用户集合
     *
     * @param {UserDTO} userDto
     * @returns {Promise < UserDTO[] >}
     * @memberof UserService
     */
    async getUserByWhere(userDto : UserDTO) : Promise < UserDTO[] > {
        const userList = await this
            .userRepository
            .findByWhere(userDto);

        return await BeanUtil.mapList(userList, UserDTO);
    }

    /**
     * 保存用户
     *
     * @param {UserDTO} userDto
     * @returns {Promise < boolean >}
     * @memberof UserService
     */
    async saveUser(userDto : UserDTO) : Promise < boolean > {
        const user = userDto.clone();
        await this
            .userRepository
            .save(user);
        return true;
    }

    /**
     * 更新用户
     *
     * @param {UserDTO} userDto
     * @returns {Promise < boolean >}
     * @memberof UserService
     */
    async updateUser(userId : number, userDto : UserDTO) : Promise < boolean > {
        const user = userDto.clone();
        await this
            .userRepository
            .update(userId, user);
        return true;
    }

    /**
     * 删除用户
     *
     * @param {UserDTO} userDto
     * @returns {Promise < boolean >}
     * @memberof UserService
     */
    async deleteUser(userId : number) : Promise < boolean > {
        await this
            .userRepository
            .delete(userId);
        return true;
    }
}