import { Document } from 'mongoose';
export type RegisterDocument = Register & Document;
export declare class Register {
    name: string;
    cpf: string;
    phone: string;
    email: string;
    address: string;
}
export declare const RegisterSchema: import("mongoose").Schema<Register, import("mongoose").Model<Register, any, any, any, Document<unknown, any, Register> & Register & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Register, Document<unknown, {}, import("mongoose").FlatRecord<Register>> & import("mongoose").FlatRecord<Register> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
