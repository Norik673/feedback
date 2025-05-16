import { Module } from '@nestjs/common';
import { TargetService } from './targets.service';
import { TargetController } from './targets.controller';
import { Targets } from './entities/targets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Targets])],
  controllers: [TargetController],
  providers: [TargetService],
  exports: [TargetService]
})
export class TargetModule {}
