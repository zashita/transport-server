import {Ads, AdsSchema} from "./Ads.schema";
import {FileService} from "../file/file.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AdsService } from "./Ads.service";
import { AdsController } from "./Ads.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Ads.name, schema: AdsSchema}]),
  ],
  controllers:[AdsController],
  providers:[AdsService, FileService]
})
export class AdsModule{};
