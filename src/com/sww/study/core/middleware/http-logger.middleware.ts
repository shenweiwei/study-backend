import { Injectable, NestMiddleware, MiddlewareFunction, Logger } from '@nestjs/common';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const msg = `Request ${req.method} url:'${req.baseUrl}' body:'${JSON.stringify(req.body)}'`;
      Logger.log(msg , 'LoggerMiddleware');
      next();
    };
  }
}