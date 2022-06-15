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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./customers.service");
const customers_entity_1 = require("./entity/customers.entity");
let CustomersController = class CustomersController {
    constructor(customersService) {
        this.customersService = customersService;
    }
    async getAllCustomers() {
        return await this.customersService.findAll();
    }
    async getOneCustomer(id) {
        return await this.customersService.findOne(id);
    }
    async update(id, createCustomerDto) {
        return await this.customersService.update(id, createCustomerDto);
    }
    async addNew(createCustomerDto) {
        return await this.customersService.addNew(createCustomerDto);
    }
    async delete(id) {
        return await this.customersService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getAllCustomers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getOneCustomer", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, customers_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('createCustomer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customers_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "addNew", null);
__decorate([
    (0, common_1.Delete)('deleteCustomer/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "delete", null);
CustomersController = __decorate([
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map