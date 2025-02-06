import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tooth } from '../schemas/tooth.schema';

@Injectable()
export class ToothService {
  constructor(@InjectModel(Tooth.name) private readonly toothModel: Model<Tooth>) {}

  async create(createToothDto: { name: string; type: string; condition: string }) {
    const createdTooth = new this.toothModel(createToothDto);
    return createdTooth.save();
  }

  async findAll() {
    return this.toothModel.find().exec(); 
  }
}
