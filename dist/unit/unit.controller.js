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
exports.UnitController = void 0;
const common_1 = require("@nestjs/common");
const unit_entity_1 = require("./entity/unit.entity");
const unit_service_1 = require("./unit.service");
let UnitController = class UnitController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async getAllUnits() {
        return await this.unitService.findAll();
    }
    async getOneUnit(id) {
        return await this.unitService.findOne(id);
    }
    async update(id, createUnitDto) {
        return await this.unitService.update(id, createUnitDto);
    }
    async addNew(createUnitDto) {
        return await this.unitService.addNew(createUnitDto);
    }
    async delete(id) {
        return await this.unitService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getAllUnits", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "getOneUnit", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, unit_entity_1.UnitEntity]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('createUnit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_entity_1.UnitEntity]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "addNew", null);
__decorate([
    (0, common_1.Delete)('deleteUnit/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "delete", null);
UnitController = __decorate([
    (0, common_1.Controller)('unit'),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitController);
exports.UnitController = UnitController;
//# sourceMappingURL=unit.controller.js.map