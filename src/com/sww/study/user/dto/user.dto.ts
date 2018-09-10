import {BaseDTO} from '../../common/dtos/base.dto';
export class UserDTO extends BaseDTO {
    private _name : string = null;
    private _email : string = null;
    private _tel : string = null;

    /**
     * Getter name
     * @return {string}
     */
    public get name() : string {return this._name;}

    /**
     * Getter email
     * @return {string}
     */
    public get email() : string {return this._email;}

    /**
     * Getter tel
     * @return {string}
     */
    public get tel() : string {return this._tel;}

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value : string) {
        this._name = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value : string) {
        this._email = value;
    }

    /**
     * Setter tel
     * @param {string} value
     */
    public set tel(value : string) {
        this._tel = value;
    }

}