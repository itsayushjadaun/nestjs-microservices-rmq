import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => 
         {
          console.log("mongodburl", configService.get<string>('MONGODB_URI'))
          return {
        uri: configService.get<string>('MONGODB_URI') || `mongodb://root:ayush@mongodb-primary:27017/`,
         }},
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}