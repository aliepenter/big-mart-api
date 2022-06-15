import { ProductEntity } from './entity/products.entity';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<ProductEntity[]>;
    getOneProduct(id: number): Promise<ProductEntity>;
    update(id: number, createProductDto: ProductEntity): Promise<void>;
    addNew(createProductDto: ProductEntity): Promise<ProductEntity>;
    delete(id: number): Promise<void>;
}
