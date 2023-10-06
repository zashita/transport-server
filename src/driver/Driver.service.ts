import { Injectable } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { FileService } from "../file/file.service";
import { Driver, DriverDocument } from "./Driver.schema";
import { InjectModel } from "@nestjs/mongoose";
import { createDriverDto } from "./dto/driver.creation.dto";

@Injectable()
export class DriverService{
  constructor(@InjectModel(Driver.name) private driverModel: Model<DriverDocument>,
              private fileService: FileService) {}
async getAll(): Promise<Driver[]> {
    const drivers = await this.driverModel.find()
  return  drivers;
}
async getOne(id: ObjectId): Promise<Driver>{
    const driver = await this.driverModel.findById(id);
    return driver
}

async create(dto: createDriverDto, picture): Promise<Driver>{
    const filePath = this.fileService.createFile(picture);
    const driver = this.driverModel.create({...dto, photo: filePath, ads: []})
  return driver;
}

async delete(id:ObjectId): Promise<Driver>{
    const driver = await this.driverModel.findByIdAndDelete(id)
  return driver
}
}

