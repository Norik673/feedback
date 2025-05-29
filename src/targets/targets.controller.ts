import { Controller, Get, Post, Body, Patch, Param, Request } from '@nestjs/common';
import { TargetService } from './targets.service';
import { Targets } from './entities/targets.entity';
import { CreateTargetDto } from './dto/create-targets.dto';
import { UpdateTargetDto } from './dto/update-targets.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('targets')
@Controller('target')
export class TargetController {
  constructor(private readonly targetService: TargetService) {}

  @Post('create')
  @ApiOperation({summary: 'create target'})
  @ApiResponse({status: 201, description: 'target is created'})
  create(@Body() createTargetDto: CreateTargetDto, @Request() req): Promise<Targets> {
    const orgId = req.user.orgId;
    return this.targetService.create(createTargetDto, orgId);
  }

  @Get('find')
  @ApiOperation({summary: 'search targets'})
  @ApiResponse({status: 201, description: 'targets which you searched'})
  findAll(@Request() req): Promise<Targets[]> {
    const orgId = req.user.orgId;
    return this.targetService.findAll(orgId);
  }

  @Patch('update/:id')
  @ApiOperation({summary: 'updated target'})
  @ApiResponse({status: 201, description: 'target is updated'})
  update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto): Promise<Targets> {
    return this.targetService.update(+id, updateTargetDto);
  }
}
