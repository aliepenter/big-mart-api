import { StoreEntity } from './entity/stores.entity';
import { StoresService } from './stores.service';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    getAllStores(): Promise<StoreEntity[]>;
    getOneStore(id: number): Promise<StoreEntity>;
    update(id: number, createStoreDto: StoreEntity): Promise<void>;
    addNew(createStoreDto: StoreEntity): Promise<StoreEntity>;
    delete(id: number): Promise<void>;
}
