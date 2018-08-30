import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { HttpLoggerMiddleware } from './middleware/http-logger.middleware';

@Module({
  imports: [],
  providers: [
    
  ],
  exports:[
    
  ]
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLoggerMiddleware)
      .forRoutes('study');
  }
}