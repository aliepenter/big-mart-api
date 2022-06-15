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
exports.StoresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const stores_entity_1 = require("./entity/stores.entity");
const employees_entity_1 = require("../employees/entity/employees.entity");
let StoresService = class StoresService {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }
    async findAll() {
        return this.storeModel.createQueryBuilder('store')
            .innerJoinAndMapOne('store.idnhanvien', employees_entity_1.EmployeeEntity, 'em', 'em.id = store.idnhanvien')
            .getMany();
    }
    async findOne(id) {
        return await this.storeModel.createQueryBuilder('store')
            .innerJoinAndMapOne('store.idnhanvien', employees_entity_1.EmployeeEntity, 'em', 'em.id = store.idnhanvien')
            .where("store.id = " + `"${id['id']}"`)
            .execute();
    }
    async update(id, stores) {
        await this.storeModel.update(id, stores);
    }
    async addNew(stores) {
        return await this.storeModel.save(stores);
    }
    async deleteOne(id) {
        await this.storeModel.delete(id);
    }
};
StoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stores_entity_1.StoreEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoresService);
exports.StoresService = StoresService;
//# sourceMappingURL=stores.service.js.map