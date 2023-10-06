import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { createDriverDto } from "./dto/driver.creation.dto";
import { DriverService } from "./Driver.service";

@Controller('/drivers')
export class DriverController{
  constructor(private driverService: DriverService) {
  }
  @Get()
  async getAll(){
    return await this.driverService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: ObjectId){
      return await this.driverService.getOne(id)
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'photo', maxCount: 1} ,
  ]))
  async create(@UploadedFiles() files, @Body() dto: createDriverDto){
    console.log(files)
      return await this.driverService.create(dto, files.photo[0])
  }

  @Delete(':id')
  async delete(@Param('id') id: ObjectId){
    return await this.driverService.delete(id);
  }


}
