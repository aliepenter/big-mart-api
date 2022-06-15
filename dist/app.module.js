"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const providers_module_1 = require("./providers/providers.module");
const providers_entity_1 = require("./providers/entity/providers.entity");
const products_module_1 = require("./products/products.module");
const categories_module_1 = require("./categories/categories.module");
const stores_module_1 = require("./stores/stores.module");
const points_module_1 = require("./points/points.module");
const unit_module_1 = require("./unit/unit.module");
const images_module_1 = require("./images/images.module");
const invoices_module_1 = require("./invoices/invoices.module");
const invoice_detail_module_1 = require("./invoice-detail/invoice-detail.module");
const customers_module_1 = require("./customers/customers.module");
const employees_module_1 = require("./employees/employees.module");
const payments_module_1 = require("./payments/payments.module");
const shipments_module_1 = require("./shipments/shipments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'bigmart_db',
                entities: [providers_entity_1.ProviderEntity],
                synchronize: true,
                autoLoadEntities: true,
            }), users_module_1.UsersModule, providers_module_1.ProvidersModule, products_module_1.ProductsModule, categories_module_1.CategoriesModule, stores_module_1.StoresModule, points_module_1.PointsModule, unit_module_1.UnitModule, images_module_1.ImagesModule, invoices_module_1.InvoicesModule, invoice_detail_module_1.InvoiceDetailModule, customers_module_1.CustomersModule, employees_module_1.EmployeesModule, payments_module_1.PaymentsModule, shipments_module_1.ShipmentsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map