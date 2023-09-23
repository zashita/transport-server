
import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path"
import { DriverModule } from "./driver/Driver.module";
const password = 'swMKkS9ANKd3WEMg';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(`mongodb+srv://velich:${password}@transport.awrtyve.mongodb.net/?retryWrites=true&w=majority`),
    DriverModule]
})


export class AppModule {};
