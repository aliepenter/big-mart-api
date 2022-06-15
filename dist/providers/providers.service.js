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
exports.ProvidersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const providers_entity_1 = require("./entity/providers.entity");
let ProvidersService = class ProvidersService {
    constructor(providersModel) {
        this.providersModel = providersModel;
    }
    async findAll() {
        return await this.providersModel.find();
    }
    async findOne(id) {
        return await this.providersModel.createQueryBuilder('p')
            .where("p.id = " + `"${id['id']}"`)
            .execute();
    }
    async update(id, providers) {
        await this.providersModel.update(id, providers);
    }
    async addNew(providers) {
        return await this.providersModel.save(providers);
    }
    async deleteOne(id) {
        await this.providersModel.delete(id);
    }
};
ProvidersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(providers_entity_1.ProviderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProvidersService);
exports.ProvidersService = ProvidersService;
//# sourceMappingURL=providers.service.js.map