import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Ads, AdsDocument } from "./Ads.schema";
import { Model, ObjectId } from "mongoose";
import { FileService } from "../file/file.service";
import { createAdsDto } from "./dto/createAdsDto";

@Injectable()
export class AdsService{
  constructor(@InjectModel(Ads.name) private adsModel: Model<AdsDocument>,
  private fileService: FileService) {
  }
  async getAll(): Promise<Ads[]>{
    const ads = await this.adsModel.find();
    return ads
  }
  async getOne(id: ObjectId):Promise<Ads>{
    const ads = await this.adsModel.findById(id);
    return ads
  }

  async create(dto: createAdsDto, files): Promise<Ads>{

    const filePath = this.fileService.createFile(files);
    const ads = await this.adsModel.create({...dto, photo: filePath})
    return ads;
  }

  async delete(id: ObjectId): Promise<Ads>{
    const ads = await this.adsModel.findByIdAndDelete(id);
    return ads;
  }



}
