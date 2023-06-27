import { Test, TestingModule } from '@nestjs/testing';
import { MathTestController } from './math-test.controller';

describe('MathTestController', () => {
  let controller: MathTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathTestController],
    }).compile();

    controller = module.get<MathTestController>(MathTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
