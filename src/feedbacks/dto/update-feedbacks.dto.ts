import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedbackDto } from './create-feedbacks.dto';

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {}
