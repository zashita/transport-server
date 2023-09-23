import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type DriverDocument = HydratedDocument<Driver>
@Schema()
export class Driver{
  @Prop()
  name: string;
  @Prop()
  surname: string
  @Prop()
  phone: string
  @Prop()
  legalAddress: string
  @Prop()
  organisation: string
  @Prop()
  photo: string;
  ads: any
}

export const DriverSchema = SchemaFactory.createForClass(Driver);


