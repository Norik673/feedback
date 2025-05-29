import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedbacks.dto';
import { UpdateFeedbackDto } from './dto/update-feedbacks.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Feedbacks } from './entities/feedbacks.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedbacks) private feedbackModel: Repository<Feedbacks>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto, userId: number, orgId: number): Promise<Feedbacks> {
    return await this.feedbackModel.save({...createFeedbackDto, userId, orgId});
  }
        
  async findAll(orgId: number): Promise<Feedbacks[]> {
    const cacheKey = `feedbacks:${orgId}`;
    const cached = await this.cacheManager.get<Feedbacks[]>(cacheKey);

    if(cached) {
      console.log('->->->->->->->->->From Cache');
      return cached;
    } else {
      const feedbacks = await this.feedbackModel.find({where: {orgId}});
      await this.cacheManager.set(cacheKey, feedbacks, 0);
      return feedbacks;
    }
  }
        
  async update(id: number, updateFeedbackDto: UpdateFeedbackDto): Promise<Feedbacks> {
    const feedback = await this.feedbackModel.findOne({where: {id}})
        
    if(!feedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
        
    Object.assign(feedback, updateFeedbackDto);
    await this.cacheManager.del(`feedbacks:${feedback.orgId}`)
    return await this.feedbackModel.save(feedback);
  }
}
