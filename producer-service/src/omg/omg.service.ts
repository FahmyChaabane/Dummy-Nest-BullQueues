import {
  QUEUE_CASH_MVT,
  QUEUE_OPERATION_MVT,
  SIDONIE_JOB,
  JULINE_JOB,
  CACEIS_JOB,
} from './../queues';
import { MvtOperationDto } from './dto/mvt-operation.dto';
import { MvtCashDto } from './dto/mvt-cash.dto';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class OmgService {
  constructor(
    @InjectQueue(QUEUE_CASH_MVT) private cashMouvementQueue: Queue,
    @InjectQueue(QUEUE_OPERATION_MVT) private operationMouvementQueue: Queue,
  ) {}

  async transferCashMvt(data: MvtCashDto): Promise<void> {
    if (data.newed) {
      await this.cashMouvementQueue.add(SIDONIE_JOB, data);
    } else {
      await this.cashMouvementQueue.add(JULINE_JOB, data);
    }
  }

  async transferOperationMvt(data: MvtOperationDto): Promise<void> {
    await this.operationMouvementQueue.add(CACEIS_JOB, data);
  }
}
