import { QUEUE_CASH_MVT, QUEUE_OPERATION_MVT } from './../queues';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TmcListenerQueue } from './tmc-listener.queue';
import { CtbListenerQueue } from './ctb-listener.queue';
import { ListenerController } from './listener.controller';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: QUEUE_CASH_MVT,
      },
      { name: QUEUE_OPERATION_MVT },
    ),
  ],
  providers: [CtbListenerQueue, TmcListenerQueue],
  controllers: [ListenerController],
})
export class ListenerModule {}
