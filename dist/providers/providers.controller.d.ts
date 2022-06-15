import { ProvidersService } from './providers.service';
import { ProviderEntity } from './entity/providers.entity';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    getAllProviders(): Promise<ProviderEntity[]>;
    getOneProvider(id: number): Promise<ProviderEntity>;
    update(id: number, createProviderDto: ProviderEntity): Promise<void>;
    addNew(createProviderDto: ProviderEntity): Promise<ProviderEntity>;
    delete(id: number): Promise<void>;
}
