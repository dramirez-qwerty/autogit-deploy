import { Test, TestingModule } from '@nestjs/testing';
import { MicroServicesService } from './micro-services.service';

describe('MicroServicesService', () => {
  let service: MicroServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroServicesService],
    }).compile();

    service = module.get<MicroServicesService>(MicroServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
