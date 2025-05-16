import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedbacks.dto';
import { UpdateFeedbackDto } from './dto/update-feedbacks.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Feedbacks } from './entities/feedbacks.entity';

@Injectable()
export class FeedbackService {
  constructor(@InjectRepository(Feedbacks) private feedbackModel: Repository<Feedbacks>) {}

  async create(createFeedbackDto: CreateFeedbackDto, userId: number, orgId: number): Promise<Feedbacks> {
    return await this.feedbackModel.save({...createFeedbackDto, userId, orgId});
  }
        
  async findAll(targetId: number): Promise<Feedbacks[]> {
    return await this.feedbackModel.find({where: {targetId}});
  }
        
  async update(id: number, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedbacks> {
    const feedback = await this.feedbackModel.findOne({where: {id}})
        
    if(!feedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
        
    Object.assign(feedback, updateFeedbackDto);
    return await this.feedbackModel.save(feedback);
  }
}
