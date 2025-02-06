import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToothController } from '../controllers/tooth.controller';
import { ToothService } from '../services/tooth.service';
import { Tooth, ToothSchema } from '../schemas/tooth.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tooth.name, schema: ToothSchema }]),
  ],
  controllers: [ToothController],
  providers: [ToothService],
})
export class ToothModule {}
