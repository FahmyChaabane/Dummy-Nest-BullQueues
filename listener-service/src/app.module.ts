import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ListenerModule } from './listener/listener.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    ListenerModule,
  ],
})
export class AppModule {}
