import {Repository, EntityRepository} from "typeorm";
import {User} from "../entitys/user.entity";
import {UserDTO} from '../dto/user.dto';

@EntityRepository(User)
export class UserRepository extends Repository < User > {

    findByWhere(userDto : UserDTO) : Promise < User[] > {
        return this
            .createQueryBuilder('user')
            .where('user.email = :email')
            .orWhere('user.tel = :tel')
            .setParameters(userDto)
            .getMany();
    }
}