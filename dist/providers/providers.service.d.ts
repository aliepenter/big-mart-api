import { Repository } from 'typeorm';
import { ProviderEntity } from './entity/providers.entity';
export declare class ProvidersService {
    private readonly providersModel;
    constructor(providersModel: Repository<ProviderEntity>);
    findAll(): Promise<ProviderEntity[]>;
    findOne(id: number): Promise<ProviderEntity>;
    update(id: number, providers: ProviderEntity): Promise<void>;
    addNew(providers: ProviderEntity): Promise<ProviderEntity>;
    deleteOne(id: number): Promise<void>;
}
