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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("./entity/products.entity");
const categories_entity_1 = require("../categories/entity/categories.entity");
const unit_entity_1 = require("../unit/entity/unit.entity");
const providers_entity_1 = require("../providers/entity/providers.entity");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll() {
        return this.productModel.createQueryBuilder('product')
            .innerJoinAndMapOne('product.idchungloai', categories_entity_1.CategoryEntity, 'cate', 'cate.id = product.idchungloai')
            .innerJoinAndMapOne('product.iddonvitinh', unit_entity_1.UnitEntity, 'unit', 'unit.id = product.iddonvitinh')
            .innerJoinAndMapOne('product.idnhacc', providers_entity_1.ProviderEntity, 'provider', 'provider.id = product.idnhacc')
            .getMany();
    }
    async findOne(id) {
        return await this.productModel.createQueryBuilder('product')
            .innerJoinAndMapOne('product.idchungloai', categories_entity_1.CategoryEntity, 'cate', 'cate.id = product.idchungloai')
            .innerJoinAndMapOne('product.iddonvitinh', unit_entity_1.UnitEntity, 'unit', 'unit.id = product.iddonvitinh')
            .innerJoinAndMapOne('product.idnhacc', providers_entity_1.ProviderEntity, 'provider', 'provider.id = product.idnhacc')
            .where("product.id = " + `"${id['id']}"`)
            .execute();
    }
    async update(id, products) {
        await this.productModel.update(id, products);
    }
    async addNew(products) {
        return await this.productModel.save(products);
    }
    async deleteOne(id) {
        await this.productModel.delete(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map