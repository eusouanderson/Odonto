import { ToothService } from '../services/tooth.service';
export declare class ToothController {
    private readonly toothService;
    constructor(toothService: ToothService);
    create(createToothDto: {
        name: string;
        type: string;
        condition: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("../schemas/tooth.schema").Tooth> & import("../schemas/tooth.schema").Tooth & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/tooth.schema").Tooth> & import("../schemas/tooth.schema").Tooth & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
