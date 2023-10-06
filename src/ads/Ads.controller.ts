import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { Ads } from "./Ads.schema";
import { AdsService } from "./Ads.service";
import { ObjectId } from "mongoose";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { createAdsDto } from "./dto/createAdsDto";

@Controller('/ads')
export class AdsController{
  constructor(private adsService: AdsService) {
  }
  @Get()
  async getAll():Promise<Ads[]>{
    return this.adsService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: ObjectId): Promise<Ads>{
    return this.adsService.getOne(id);
  }
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'photo', maxCount: 1} ,
  ]))
  async create(@UploadedFiles() files, @Body() dto: createAdsDto){
    console.log(files)
    return await this.adsService.create(dto, files.photo[0])
  }
  @Delete(':id')
  async delete(@Param('id')id: ObjectId):Promise<Ads>{
    return await this.delete(id);
  }

}
