import { Controller, Get, Post, Body, Patch, Param, Request } from '@nestjs/common';
import { FeedbackService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedbacks.dto';
import { UpdateFeedbackDto } from './dto/update-feedbacks.dto';
import { Feedbacks } from './entities/feedbacks.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('feedbacks')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('create')
  @ApiOperation({summary: 'create feedback'})
  @ApiResponse({status: 201, description: 'feedback is created'})
  async create(@Body() createFeedbackDto: CreateFeedbackDto, @Request() req): Promise<Feedbacks> {
    const userId = req.user.userId;
    const orgId = req.user.orgId;
    return this.feedbackService.create(createFeedbackDto, userId, orgId);
  }

  @Get('find')
  @ApiOperation({summary: 'search feedbacks'})
  @ApiResponse({status: 201, description: 'feedbacks which you search'})
   async findAll(@Request() req): Promise<Feedbacks[]> {
    const orgId = req.user.orgId
    return this.feedbackService.findAll(orgId);
  }

  @Patch('update/:id')
  @ApiOperation({summary: 'update feedback'})
  @ApiResponse({status: 200, description: 'feedback updated'})
  async update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto): Promise<Feedbacks> {
    return this.feedbackService.update(+id, updateFeedbackDto);
  }
}
