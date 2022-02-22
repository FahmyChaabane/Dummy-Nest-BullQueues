import { QUEUE_OPERATION_MVT, CACEIS_JOB } from './../queues';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor(QUEUE_OPERATION_MVT)
export class TmcProcessor {
  @Process(CACEIS_JOB)
  async processOperationMouvementTransfer(job: Job<unknown>) {
    console.log('processed data: ', job.data, job.id, job.name);
    for (let i = 0; i < 10000; i++) {
      i++;
    }
    return { msg: ` ${job.name} done` };
  }
}
