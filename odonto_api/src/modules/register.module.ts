import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Register, RegisterSchema } from '../schemas/register.schema';
import { RegisterService } from '../services/register.service';
import { RegisterController } from '../controllers/register.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Register.name, schema: RegisterSchema }])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
