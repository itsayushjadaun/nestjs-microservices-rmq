import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import Joi, * as joi from 'joi'

import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule} from '../../../libs/common';
import { OrdersRepository } from './orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, Orderschema } from './schema/order.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema : joi.object({
        MONGODB_URI : Joi.string().required(),
      }),
      envFilePath : './apps/orders/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name : Order.name , schema : Orderschema}]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService,OrdersRepository],
})
export class OrdersModule {}
