import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegisterDocument = Register & Document;

@Schema()
export class Register {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  address: string;
}

export const RegisterSchema = SchemaFactory.createForClass(Register);
