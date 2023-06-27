import { Test, TestingModule } from '@nestjs/testing';
import { CryptographyTestController } from './cryptography-test.controller';

describe('CryptographyTestController', () => {
  let controller: CryptographyTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptographyTestController],
    }).compile();

    controller = module.get<CryptographyTestController>(CryptographyTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
