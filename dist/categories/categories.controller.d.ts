import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entity/categories.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<CategoryEntity[]>;
    getOneCategory(id: number): Promise<CategoryEntity>;
    update(id: number, createCategoryDto: CategoryEntity): Promise<void>;
    addNew(createCategoryDto: CategoryEntity): Promise<CategoryEntity>;
    delete(id: number): Promise<void>;
}
