import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { CtbModule } from './ctb/ctb.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    CtbModule,
  ],
})
export class AppModule {}
