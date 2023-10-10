import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import Joi, * as joi from 'joi'
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule,RmqModule} from '@app/common';
import { OrdersRepository } from './orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, Orderschema } from './schema/order.schema';
import { BILLING_SERVICE } from './constants/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema : joi.object({
        MONGODB_URI : joi.string().required(),
        PORT : joi.number().required(),
      }),
      envFilePath : './apps/orders/.env'  
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name : Order.name , schema : Orderschema}]),
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService,OrdersRepository],
})
export class OrdersModule {}
