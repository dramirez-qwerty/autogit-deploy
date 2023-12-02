import { Module } from '@nestjs/common';
import { MicroServicesService } from './micro-services.service';
import { MicroServicesController } from './micro-services.controller';

@Module({
  controllers: [MicroServicesController],
  providers: [MicroServicesService],
})
export class MicroServicesModule {}
