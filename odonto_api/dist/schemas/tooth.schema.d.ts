import { Document } from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';
export declare class Tooth extends Document {
    id: string | number;
    name: string;
    type: string;
    condition: string;
}
export declare const ToothSchema: MongooseSchema<Tooth, import("mongoose").Model<Tooth, any, any, any, Document<unknown, any, Tooth> & Tooth & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tooth, Document<unknown, {}, import("mongoose").FlatRecord<Tooth>> & import("mongoose").FlatRecord<Tooth> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
