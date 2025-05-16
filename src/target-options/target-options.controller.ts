import { Controller, Get, Post, Body, Patch, Param, Request } from '@nestjs/common';
import { TargetOptionService } from './target-options.service';
import { TargetOptions } from './entities/target-options.entity';
import { CreateTargetOptionDto } from './dto/create-target.options.dto';
import { UpdateTargetOptionDto } from './dto/update-target.options.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('target-options')
@Controller('target.option')
export class TargetOptionController {
  constructor(private readonly targetOptionService: TargetOptionService) {}

  @Post('create')
  @ApiOperation({summary: 'create target-option'})
  @ApiResponse({status: 201, description: 'target-option is created'})
  create(@Body() createTargetOptionDto: CreateTargetOptionDto, @Request() req): Promise<TargetOptions> {
    const userId = req.user.userId;
    const orgId = req.user.orgId;
    return this.targetOptionService.create(createTargetOptionDto, userId, orgId);
  }

  @Get('find/:id')
  @ApiOperation({summary: 'search target-option'})
  @ApiResponse({status: 201, description: 'target-option which you searched'})
  findAll(@Param('id') id: number): Promise<TargetOptions[]> {
    return this.targetOptionService.findAll(+id);
  }

  @Patch('update/:id')
  @ApiOperation({summary: 'update target-option'})
  @ApiResponse({status: 200, description: 'target-option is updated'})
  update(@Param('id') id: string, @Body() updateTargetOptionDto: UpdateTargetOptionDto): Promise<TargetOptions> {
    return this.targetOptionService.update(+id, updateTargetOptionDto);
  }
}
