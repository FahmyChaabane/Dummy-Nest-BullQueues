import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { OmgModule } from './omg/omg.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
      limiter: {
        max: 1000,
        duration: 5000,
      },
      defaultJobOptions: {
        attempts: 5,
      },
    }),
    OmgModule,
  ],
})
export class AppModule {}
