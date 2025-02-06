import { Model } from 'mongoose';
import { Register, RegisterDocument } from '../schemas/register.schema';
export declare class RegisterService {
    private registerModel;
    constructor(registerModel: Model<RegisterDocument>);
    createRegister(name: string, cpf: string, phone: string, email: string, address: string): Promise<Register>;
    getAllRegisters(): Promise<Register[]>;
}
