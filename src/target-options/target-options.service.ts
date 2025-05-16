import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTargetOptionDto } from './dto/create-target.options.dto';
import { UpdateTargetOptionDto } from './dto/update-target.options.dto';
import { TargetOptions } from './entities/target-options.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

@Injectable()
export class TargetOptionService {
  constructor(@InjectRepository(TargetOptions) private targetOptionModel: Repository<TargetOptions>) {}

  async create(createTargetOptionDto: CreateTargetOptionDto, userId: number, orgId: number): Promise<TargetOptions> {
    return await this.targetOptionModel.save({...createTargetOptionDto, userId, orgId});
  }
    
  async findAll(id: number): Promise<TargetOptions[]> {
    return await this.targetOptionModel.find({where: {id}});
  }
    
  async update(id: number, updateTargetOptionDto: UpdateTargetOptionDto): Promise<TargetOptions> {
    const targetOption = await this.targetOptionModel.findOne({where: {id}})
    
    if(!targetOption) {
      throw new NotFoundException(`Target with ID ${id} not found`);
    }
    
    Object.assign(targetOption, updateTargetOptionDto);
    return await this.targetOptionModel.save(targetOption);
  }
}