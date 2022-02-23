import { Test, TestingModule } from '@nestjs/testing';
import { HandicapController } from './handicap.controller';
import { HandicapService } from './handicap.service';

describe('HandicapController', () => {
  let controller: HandicapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandicapController],
      providers: [HandicapService],
    }).compile();

    controller = module.get<HandicapController>(HandicapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
