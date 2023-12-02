import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { MicroServicesService } from "./micro-services.service";
import { CreateMicroServiceDto } from "./dto/create-micro-service.dto";
import { UpdateMicroServiceDto } from "./dto/update-micro-service.dto";

@Controller("micro-services")
export class MicroServicesController {
  constructor(private readonly microServicesService: MicroServicesService) {}

  @Post()
  create(@Body() createMicroServiceDto: CreateMicroServiceDto) {
    return this.microServicesService.create(createMicroServiceDto);
  }

  @Get()
  findAll() {
    return this.microServicesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.microServicesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMicroServiceDto: UpdateMicroServiceDto) {
    return this.microServicesService.update(+id, updateMicroServiceDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.microServicesService.remove(+id);
  }
}
