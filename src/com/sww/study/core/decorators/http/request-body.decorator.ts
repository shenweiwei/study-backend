import { BaseDTO } from '../../../common/dtos/base.dto';
import { createParamDecorator } from '@nestjs/common';

export const RequestBody = createParamDecorator((data, req) => {
  req.body.toString = BaseDTO.toString;
  req.body.clone = BaseDTO.clone;
  return req.body;
});