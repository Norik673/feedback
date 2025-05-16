import { PartialType } from '@nestjs/mapped-types';
import { CreateTargetOptionDto } from './create-target.options.dto';

export class UpdateTargetOptionDto extends PartialType(CreateTargetOptionDto) {}
