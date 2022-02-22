import { QUEUE_CASH_MVT, QUEUE_OPERATION_MVT } from './queues';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Queue } from 'bull';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // bull-board config
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath('/bull-board');
  const mvtCashQueue = app.get<Queue>(`BullQueue_${QUEUE_CASH_MVT}`);
  const mvtOperationQueue = app.get<Queue>(`BullQueue_${QUEUE_OPERATION_MVT}`);
  createBullBoard({
    queues: [new BullAdapter(mvtCashQueue), new BullAdapter(mvtOperationQueue)],
    serverAdapter,
  });
  app.use('/bull-board', serverAdapter.getRouter());

  await app.listen(3001);
}
bootstrap();
