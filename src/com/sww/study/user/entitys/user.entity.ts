import {BaseEntity} from '../../common/entitys/base.entity';
import {PrimaryGeneratedColumn, Column,  Entity} from 'typeorm';

@Entity()
export class User extends BaseEntity {

    /**
     * 主键
     *
     * @type {number}
     * @memberof User
     */
    @PrimaryGeneratedColumn()
    id : number


    /**
     * 用户名字
     *
     * @type {string}
     * @memberof User
     */
    @Column()
    name:string;
    

    /**
     * 账户密码
     *
     * @type {string}
     * @memberof User
     */
    @Column()
    password:string;


    /**
     * 手机号码
     *
     * @type {number}
     * @memberof User
     */
    @Column({nullable:true})
    tel:number;


    /**
     * 邮箱
     *
     * @type {string}
     * @memberof User
     */
    @Column({nullable:true})
    email:string;

}