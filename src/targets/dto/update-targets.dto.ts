import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetDto } from './create-targets.dto';

export class UpdateTargetDto extends PartialType(CreateTargetDto) {}
