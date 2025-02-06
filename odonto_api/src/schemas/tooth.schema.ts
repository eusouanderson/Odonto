import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tooth extends Document {
  @Prop({ required: false })
  id: string; 
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  condition: string;
}

export const ToothSchema = SchemaFactory.createForClass(Tooth);
