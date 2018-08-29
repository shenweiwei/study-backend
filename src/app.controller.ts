import { Get, Controller } from '@nestjs/common';
import { AppService } from 'app.service';

@Controller('study')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
