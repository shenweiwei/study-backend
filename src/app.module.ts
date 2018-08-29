import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PictureModule } from 'com/sww/study/picture/picture.module';
import { CommonModule } from 'com/sww/study/common/common.module';
import { CoreModule } from 'com/sww/study/core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PictureModule,
    CommonModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
