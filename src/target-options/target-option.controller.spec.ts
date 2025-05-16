import { Test, TestingModule } from '@nestjs/testing';
import { TargetOptionController } from './target-options.controller';
import { TargetOptionService } from './target-options.service';

describe('TargetOptionController', () => {
  let controller: TargetOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TargetOptionController],
      providers: [TargetOptionService],
    }).compile();

    controller = module.get<TargetOptionController>(TargetOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
