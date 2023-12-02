import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";
import { MicroServicesModule } from './http/micro-services/micro-services.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), MicroServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
