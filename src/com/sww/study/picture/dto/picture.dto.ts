import {BaseDTO} from '../../common/dtos/base.dto';

export class PictureDTO extends BaseDTO {
  private _fileId : string = null;
  private _name : string = null;
  private _fileUri : string = null;
  private _describe : string = null;
  private _suffixName : string = null;


    /**
     * Getter fileId
     * @return {string }
     */
	public get fileId(): string  {
		return this._fileId;
	}

    /**
     * Getter name
     * @return {string }
     */
	public get name(): string  {
		return this._name;
	}

    /**
     * Getter fileUri
     * @return {string }
     */
	public get fileUri(): string  {
		return this._fileUri;
	}

    /**
     * Getter describe
     * @return {string }
     */
	public get describe(): string  {
		return this._describe;
	}

    /**
     * Getter suffixName
     * @return {string }
     */
	public get suffixName(): string  {
		return this._suffixName;
	}

    /**
     * Setter fileId
     * @param {string } value
     */
	public set fileId(value: string ) {
		this._fileId = value;
	}

    /**
     * Setter name
     * @param {string } value
     */
	public set name(value: string ) {
		this._name = value;
	}

    /**
     * Setter fileUri
     * @param {string } value
     */
	public set fileUri(value: string ) {
		this._fileUri = value;
	}

    /**
     * Setter describe
     * @param {string } value
     */
	public set describe(value: string ) {
		this._describe = value;
	}

    /**
     * Setter suffixName
     * @param {string } value
     */
	public set suffixName(value: string ) {
		this._suffixName = value;
	}

}