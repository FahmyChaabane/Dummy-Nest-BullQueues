import { Controller, Get } from '@nestjs/common';

@Controller('ctb')
export class CtbController {
  @Get()
  appHealth() {
    return 'Hello World from consumer!';
  }
}
