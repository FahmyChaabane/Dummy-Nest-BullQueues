import { QUEUE_CASH_MVT, QUEUE_OPERATION_MVT } from './../queues';
import { TmcProcessor } from './tmc.processor';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { CtbProcessor } from './ctb.processor';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: QUEUE_CASH_MVT,
      },
      { name: QUEUE_OPERATION_MVT },
    ),
  ],
  providers: [CtbProcessor, TmcProcessor],
})
export class CtbModule {}
