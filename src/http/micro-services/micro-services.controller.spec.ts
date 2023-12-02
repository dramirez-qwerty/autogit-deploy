import { Test, TestingModule } from '@nestjs/testing';
import { MicroServicesController } from './micro-services.controller';
import { MicroServicesService } from './micro-services.service';

describe('MicroServicesController', () => {
  let controller: MicroServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroServicesController],
      providers: [MicroServicesService],
    }).compile();

    controller = module.get<MicroServicesController>(MicroServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
