import { Repository } from 'typeorm';
import { UnitEntity } from './entity/unit.entity';
export declare class UnitService {
    private readonly unitModel;
    constructor(unitModel: Repository<UnitEntity>);
    findAll(): Promise<UnitEntity[]>;
    findOne(id: number): Promise<UnitEntity>;
    update(id: number, unit: UnitEntity): Promise<void>;
    addNew(unit: UnitEntity): Promise<UnitEntity>;
    deleteOne(id: number): Promise<void>;
}
