import { Repository } from 'typeorm';
import { CategoryEntity } from './entity/categories.entity';
export declare class CategoriesService {
    private readonly cateModel;
    constructor(cateModel: Repository<CategoryEntity>);
    findAll(): Promise<CategoryEntity[]>;
    findOne(id: number): Promise<CategoryEntity>;
    update(id: number, cates: CategoryEntity): Promise<void>;
    addNew(cates: CategoryEntity): Promise<CategoryEntity>;
    deleteOne(id: number): Promise<void>;
}
