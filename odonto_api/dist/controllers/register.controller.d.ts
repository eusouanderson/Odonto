import { RegisterService } from '../services/register.service';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    createRegister(body: {
        name: string;
        cpf: string;
        phone: string;
        email: string;
        address: string;
    }): Promise<import("../schemas/register.schema").Register>;
    getAllRegisters(): Promise<import("../schemas/register.schema").Register[]>;
}
