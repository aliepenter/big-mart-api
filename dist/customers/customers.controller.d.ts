import { CustomersService } from './customers.service';
import { CustomerEntity } from './entity/customers.entity';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    getAllCustomers(): Promise<CustomerEntity[]>;
    getOneCustomer(id: number): Promise<CustomerEntity>;
    update(id: number, createCustomerDto: CustomerEntity): Promise<void>;
    addNew(createCustomerDto: CustomerEntity): Promise<CustomerEntity>;
    delete(id: number): Promise<void>;
}
