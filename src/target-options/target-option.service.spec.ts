import { Test, TestingModule } from '@nestjs/testing';
import { TargetOptionService } from './target-options.service';

describe('TargetOptionService', () => {
  let service: TargetOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TargetOptionService],
    }).compile();

    service = module.get<TargetOptionService>(TargetOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
