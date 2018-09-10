import {BaseEntity} from '../../common/entitys/base.entity';
import {Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm';
import {User} from 'com/sww/study/user/entitys/user.entity';
import {PictureMetadata} from './picture-metadata.entity';
@Entity()
export class Picture extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id : number;

    
    /**
     * 图片详细信息
     *
     * @type {PictureMetadata}
     * @memberof Picture
     */
    @OneToOne(type => User)
    @JoinColumn()
    pictureMetadata : PictureMetadata;

    
    /**
     * 图片所属人员
     *
     * @type {User}
     * @memberof Picture
     */
    @OneToOne(type => User)
    @JoinColumn()
    user : User;
}