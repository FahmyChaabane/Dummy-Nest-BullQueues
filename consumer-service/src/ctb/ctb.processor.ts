import { QUEUE_CASH_MVT, SIDONIE_JOB, JULINE_JOB } from './../queues';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor(QUEUE_CASH_MVT)
export class CtbProcessor {
  @Process(SIDONIE_JOB)
  async processCashMouvementTransfer(job: Job<unknown>) {
    console.log('processed data: ', job.data, job.id, job.name);
    for (let i = 0; i < 5; i++) {
      await job.progress(i * 25);
    }
    return { msg: ` ${job.name} done` };
  }

  @Process(JULINE_JOB)
  async processCashTransfer(job: Job<unknown>) {
    console.log('processed data: ', job.data, job.id, job.name);
    for (let i = 0; i < 5; i++) {
      await job.progress(i * 25);
    }
    return { msg: ` ${job.name} done` };
  }
}
