import { Module } from '@nestjs/common';
import { FeedbackService } from './feedbacks.service';
import { FeedbackController } from './feedbacks.controller';
import { Feedbacks } from './entities/feedbacks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Feedbacks])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
  exports: [FeedbackService]
})
export class FeedbackModule {}
