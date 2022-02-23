import { Test, TestingModule } from '@nestjs/testing';
import { HandicapService } from './handicap.service';

describe('HandicapService', () => {
  let service: HandicapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandicapService],
    }).compile();

    service = module.get<HandicapService>(HandicapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});