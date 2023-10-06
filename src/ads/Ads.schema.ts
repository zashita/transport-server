import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type AdsDocument = HydratedDocument<Ads>
@Schema()
export class Ads{
  @Prop()
  name: string;
  @Prop()
  maxCapacity: number

  @Prop()
  maxWeight: number
  @Prop()
  cargoType: string;
  @Prop()
  photo: string

}

export const AdsSchema = SchemaFactory.createForClass(Ads)
