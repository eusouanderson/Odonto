import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Register, RegisterDocument } from '../schemas/register.schema';

@Injectable()
export class RegisterService {
  constructor(@InjectModel(Register.name) private registerModel: Model<RegisterDocument>) {}

  async createRegister(
    name: string,
    cpf: string,
    phone: string,
    email: string,
    address: string
  ): Promise<Register> {
    const newRegister = new this.registerModel({ name, cpf, phone, email, address });
    return newRegister.save();
  }

  async getAllRegisters(): Promise<Register[]> {
    return this.registerModel.find().exec();
  }
}
