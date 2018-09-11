import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CommonModule} from '../common/common.module';
import {User} from './entitys/user.entity';
import {UserController} from './controllers/user.controller';
import {UserService} from './services/user.service';
import { UserRepository } from './repositorys/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,UserRepository]),
    CommonModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}