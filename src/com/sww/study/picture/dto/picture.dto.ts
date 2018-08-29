import { Logger } from '@nestjs/common/services/logger.service';
import { BaseDTO } from 'com/sww/study/common/dtos/base.dto';

export class PictureDTO extends BaseDTO {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _fileUri: string;
  private readonly _describe: string;
  private readonly _suffixName: string;

  get id(): number {
    return this._id;
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