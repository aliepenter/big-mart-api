import { Repository } from 'typeorm';
import { ProductEntity } from './entity/products.entity';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Repository<ProductEntity>);
    findAll(): Promise<ProductEntity[]>;
    findOne(id: number): Promise<ProductEntity>;
    update(id: number, products: ProductEntity): Promise<void>;
    addNew(products: ProductEntity): Promise<ProductEntity>;
    deleteOne(id: number): Promise<void>;
}
