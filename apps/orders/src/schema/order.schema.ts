import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "../../../../libs/common/src";


@Schema({ versionKey : false })
export class Order extends AbstractDocument {

      @Prop()
      name : string

      @Prop()
      price : number

      @Prop()
      phoneNumber : string
}


export const  Orderschema = SchemaFactory.createForClass(Order)
