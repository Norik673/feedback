import { Module } from '@nestjs/common';
import { TargetOptionService } from './target-options.service';
import { TargetOptionController } from './target-options.controller';
import { TargetOptions } from './entities/target-options.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TargetOptions])],
  controllers: [TargetOptionController],
  providers: [TargetOptionService],
  exports: [TargetOptionService]
})
export class TargetOptionModule {}
