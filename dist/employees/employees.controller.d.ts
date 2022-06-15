import { EmployeesService } from './employees.service';
import { EmployeeEntity } from './entity/employees.entity';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    getAllEmployees(): Promise<EmployeeEntity[]>;
    getOneEmployee(id: number): Promise<EmployeeEntity>;
    update(id: number, createEmployeeDto: EmployeeEntity): Promise<void>;
    addNew(createEmployeeDto: EmployeeEntity): Promise<EmployeeEntity>;
    delete(id: number): Promise<void>;
}
