import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ toJSON: { virtuals: true, transform: (doc, ret) => { delete ret._id; } } })
export class Tooth extends Document {
  @Prop({ required: false, type: MongooseSchema.Types.Mixed })  
  id: string | number;

  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  condition: string;
}

export const ToothSchema = SchemaFactory.createForClass(Tooth);
