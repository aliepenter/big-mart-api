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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employees_entity_1 = require("./entity/employees.entity");
let EmployeesService = class EmployeesService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async findAll() {
        return await this.employeeModel.find();
    }
    async findOne(id) {
        return await this.employeeModel.createQueryBuilder('e')
            .where("e.id = " + `"${id['id']}"`)
            .execute();
    }
    async update(id, employees) {
        await this.employeeModel.update(id, employees);
    }
    async addNew(employees) {
        return await this.employeeModel.save(employees);
    }
    async deleteOne(id) {
        await this.employeeModel.delete(id);
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employees_entity_1.EmployeeEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map