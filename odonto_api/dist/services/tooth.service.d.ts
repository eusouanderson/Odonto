import { Model } from 'mongoose';
import { Tooth } from '../schemas/tooth.schema';
export declare class ToothService {
    private readonly toothModel;
    constructor(toothModel: Model<Tooth>);
    create(createToothDto: {
        name: string;
        type: string;
        condition: string;
    }): Promise<import("mongoose").Document<unknown, {}, Tooth> & Tooth & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Tooth> & Tooth & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
