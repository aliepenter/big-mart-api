import { Repository } from 'typeorm';
import { CustomerEntity } from './entity/customers.entity';
export declare class CustomersService {
    private readonly customersModel;
    constructor(customersModel: Repository<CustomerEntity>);
    findAll(): Promise<CustomerEntity[]>;
    findOne(id: number): Promise<CustomerEntity>;
    update(id: number, customers: CustomerEntity): Promise<void>;
    addNew(customers: CustomerEntity): Promise<CustomerEntity>;
    deleteOne(id: number): Promise<void>;
}
