import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProvidersModule } from './providers/providers.module';
import { ProviderEntity } from './providers/entity/providers.entity';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { StoresModule } from './stores/stores.module';
import { PointsModule } from './points/points.module';
import { UnitModule } from './unit/unit.module';
import { ImagesModule } from './images/images.module';
import { InvoicesModule } from './invoices/invoices.module';
import { InvoiceDetailModule } from './invoice-detail/invoice-detail.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { PaymentsModule } from './payments/payments.module';
import { ShipmentsModule } from './shipments/shipments.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'bigmart_db',
    entities: [ProviderEntity],
    synchronize: true,
    autoLoadEntities: true,
  }), UsersModule, ProvidersModule, ProductsModule, CategoriesModule, StoresModule, PointsModule, UnitModule, ImagesModule, InvoicesModule, InvoiceDetailModule, CustomersModule, EmployeesModule, PaymentsModule, ShipmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
