import {BaseEntity} from '../../common/entitys/base.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Double,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { Picture } from 'com/sww/study/picture/entitys/picture.entity';

@Entity()
export class Position extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;

    /**
     * 纬度
     *
     * @type {Double}
     * @memberof Position
     */
    @Column('double precision')
    latitude : number;

    /**
     * 经度
     *
     * @type {Double}
     * @memberof Position
     */
    @Column('double precision')
    longitude : number;


    /**
     * 图片外键
     *
     * @type {Picture}
     * @memberof Position
     */
    @OneToOne(type => Picture)
    @JoinColumn()
    picture : Picture;
}