import { Repository } from 'typeorm';
import { EmployeeEntity } from './entity/employees.entity';
export declare class EmployeesService {
    private readonly employeeModel;
    constructor(employeeModel: Repository<EmployeeEntity>);
    findAll(): Promise<EmployeeEntity[]>;
    findOne(id: number): Promise<EmployeeEntity>;
    update(id: number, employees: EmployeeEntity): Promise<void>;
    addNew(employees: EmployeeEntity): Promise<EmployeeEntity>;
    deleteOne(id: number): Promise<void>;
}
