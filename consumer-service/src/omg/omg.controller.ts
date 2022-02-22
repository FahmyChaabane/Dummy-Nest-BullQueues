import { QUEUE_CASH_MVT, QUEUE_OPERATION_MVT } from './../queues';
import { MvtOperationDto } from './dto/mvt-operation.dto';
import { MvtCashDto } from './dto/mvt-cash.dto';
import { OmgService } from './omg.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

@Controller('omg')
export class OmgController {
  constructor(private omgSerivce: OmgService) {}

  @Post('mvtCash')
  async transferCashMvt(
    @Body(ValidationPipe) mvtCashDto: MvtCashDto,
  ): Promise<void> {
    await this.omgSerivce.transferCashMvt(mvtCashDto);
    console.log(`Job sent to - ${QUEUE_CASH_MVT} - queue.`);
  }

  @Post('mvtOperation')
  async transferOperationMvt(
    @Body(ValidationPipe) mvtOperationDto: MvtOperationDto,
  ): Promise<void> {
    await this.omgSerivce.transferOperationMvt(mvtOperationDto);
    console.log(`Job sent to - ${QUEUE_OPERATION_MVT} - queue.`);
  }
}
