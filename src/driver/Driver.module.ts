import {Module} from "@nestjs/common"
import {DriverController} from "./Driver.controller";
import {DriverService} from "./Driver.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Driver, DriverSchema} from "./Driver.schema";
import {FileService} from "../file/file.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Driver.name, schema: DriverSchema}]),
  ],
  controllers:[DriverController],
  providers:[DriverService, FileService]
})
export class DriverModule{};
