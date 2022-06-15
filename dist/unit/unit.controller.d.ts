import { UnitEntity } from './entity/unit.entity';
import { UnitService } from './unit.service';
export declare class UnitController {
    private readonly unitService;
    constructor(unitService: UnitService);
    getAllUnits(): Promise<UnitEntity[]>;
    getOneUnit(id: number): Promise<UnitEntity>;
    update(id: number, createUnitDto: UnitEntity): Promise<void>;
    addNew(createUnitDto: UnitEntity): Promise<UnitEntity>;
    delete(id: number): Promise<void>;
}
