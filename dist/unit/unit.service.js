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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const unit_entity_1 = require("./entity/unit.entity");
let UnitService = class UnitService {
    constructor(unitModel) {
        this.unitModel = unitModel;
    }
    async findAll() {
        return await this.unitModel.find();
    }
    async findOne(id) {
        return await this.unitModel.createQueryBuilder('p')
            .where("p.id = " + `"${id['id']}"`)
            .execute();
    }
    async update(id, unit) {
        await this.unitModel.update(id, unit);
    }
    async addNew(unit) {
        return await this.unitModel.save(unit);
    }
    async deleteOne(id) {
        await this.unitModel.delete(id);
    }
};
UnitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unit_entity_1.UnitEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=unit.service.js.map