import { Repository } from 'typeorm';
import { StoreEntity } from './entity/stores.entity';
export declare class StoresService {
    private readonly storeModel;
    constructor(storeModel: Repository<StoreEntity>);
    findAll(): Promise<StoreEntity[]>;
    findOne(id: number): Promise<StoreEntity>;
    update(id: number, stores: StoreEntity): Promise<void>;
    addNew(stores: StoreEntity): Promise<StoreEntity>;
    deleteOne(id: number): Promise<void>;
}
