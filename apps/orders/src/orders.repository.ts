import { Inject, Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "../../../libs/common";
import { Order } from "./schema/order.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";


@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
      protected readonly logger = new Logger(OrdersRepository.name)
      
      constructor(
            @InjectModel(Order.name) orderModel : Model<Order>,
            @InjectConnection() connection : Connection,
      ){
            super(orderModel,connection)
      }

}    
