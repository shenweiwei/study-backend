import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Double,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { Picture } from './picture.entity';
import { BaseObjectEntity } from 'com/sww/study/common/entitys/base-object.entity';

@Entity()
export class Position extends BaseObjectEntity {

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