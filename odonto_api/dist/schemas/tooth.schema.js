"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToothSchema = exports.Tooth = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
let Tooth = class Tooth extends mongoose_2.Document {
};
exports.Tooth = Tooth;
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: mongoose_3.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], Tooth.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Tooth.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Tooth.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Tooth.prototype, "condition", void 0);
exports.Tooth = Tooth = __decorate([
    (0, mongoose_1.Schema)({ toJSON: { virtuals: true, transform: (doc, ret) => { delete ret._id; } } })
], Tooth);
exports.ToothSchema = mongoose_1.SchemaFactory.createForClass(Tooth);
//# sourceMappingURL=tooth.schema.js.map