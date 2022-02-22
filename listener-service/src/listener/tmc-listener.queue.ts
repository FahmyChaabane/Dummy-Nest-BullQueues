import { QUEUE_OPERATION_MVT } from './../queues';
import {
  InjectQueue,
  OnGlobalQueueActive,
  OnGlobalQueueCompleted,
  OnGlobalQueueFailed,
  OnGlobalQueueProgress,
  OnGlobalQueueWaiting,
  Processor,
} from '@nestjs/bull';
import { Job, Queue } from 'bull';

@Processor(QUEUE_OPERATION_MVT)
export class TmcListenerQueue {
  constructor(
    @InjectQueue(QUEUE_OPERATION_MVT) private operationMouvementQueue: Queue,
  ) {}

  @OnGlobalQueueWaiting()
  async onGlobalQueueWaiting(jobId: number | string) {
    const job: Job = await this.operationMouvementQueue.getJob(jobId);
    console.log(
      '(GLOBAL) on queue Waiting: job ',
      job.id,
      ' - with job name : ',
      job.name,
      ' IS WAITING!',
    );
  }

  @OnGlobalQueueActive()
  async onGlobalQueueActive(jobId: number) {
    const job: Job = await this.operationMouvementQueue.getJob(jobId);
    console.log(
      '(GLOBAL) on queue active: job ',
      job.id,
      ' - with job name : ',
      job.name,
      ' HAS STARTED!',
    );
  }

  @OnGlobalQueueProgress()
  async onGlobalQueueProgress(jobId: number, progress: number) {
    const job: Job = await this.operationMouvementQueue.getJob(jobId);
    console.log(
      '(GLOBAL) on queue progress: job ',
      job.id,
      ' - with job name : ',
      job.name,
      ' -> progress: ',
      progress,
    );
  }

  @OnGlobalQueueCompleted()
  async onGlobalCompleted(jobId: number, result: any) {
    const job: Job = await this.operationMouvementQueue.getJob(jobId);
    console.log(
      '(GLOBAL) on completed: job ',
      job.id,
      ' - with job name : ',
      job.name,
      ' -> result: ',
      result,
    );
  }

  @OnGlobalQueueFailed()
  async onGlobalQueueFailed(jobId: number, err: Error) {
    const job: Job = await this.operationMouvementQueue.getJob(jobId);
    console.log(
      '(GLOBAL) on queue failed: job ',
      job.id,
      ' - with job name : ',
      job.name,
      ' -> HAS FAILED: ',
      err,
    );
  }
}
