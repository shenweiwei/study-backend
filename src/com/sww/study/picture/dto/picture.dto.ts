import { BaseDTO } from '../../common/dtos/base.dto';

export class PictureDTO extends BaseDTO {
  private readonly _fileId: string;
  private readonly _name: string;
  private readonly _fileUri: string;
  private readonly _describe: string;
  private readonly _suffixName: string;

  get fileId(): string {
    return this._fileId;
  }

  get name(): string {
    return this._name;
  }

  get fileUri(): string {
    return this._fileUri;
  }

  get describe(): string {
    return this._describe;
  }

  get suffixName(): string {
    return this._suffixName;
  }
}