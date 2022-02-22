import { Controller, Get } from '@nestjs/common';

@Controller('listener')
export class ListenerController {
  @Get()
  appHealth() {
    return 'Hello World from listener!';
  }
}
