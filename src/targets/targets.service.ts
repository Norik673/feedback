import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-targets.dto';
import { UpdateTargetDto } from './dto/update-targets.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Targets } from './entities/targets.entity';

@Injectable()
export class TargetService {
    constructor(@InjectRepository(Targets) private targetModel: Repository<Targets>) {}
    
  async create(createTargetDto: CreateTargetDto, orgId: number): Promise<Targets> {
    return await this.targetModel.save({...createTargetDto, orgId});
  }

  async findAll(orgId: number): Promise<Targets[]> {
    return await this.targetModel.find({where: {orgId}});
  }

  async update(id: number, updateTargetDto: UpdateTargetDto): Promise<Targets> {
    const target = await this.targetModel.findOne({where: {id}})

    if(!target) {
      throw new NotFoundException(`Target with ID ${id} not found`);
    }

    Object.assign(target, updateTargetDto);
    return await this.targetModel.save(target);
  }
}
