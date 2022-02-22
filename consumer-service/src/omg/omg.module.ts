import { QUEUE_OPERATION_MVT, QUEUE_CASH_MVT } from './../queues';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { OmgService } from './omg.service';
import { OmgController } from './omg.controller';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: QUEUE_CASH_MVT,
      },
      { name: QUEUE_OPERATION_MVT },
    ),
  ],
  providers: [OmgService],
  controllers: [OmgController],
})
export class OmgModule {}
