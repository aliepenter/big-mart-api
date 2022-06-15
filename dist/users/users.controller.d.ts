import { UserEntity } from './entity/users.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<UserEntity[]>;
    getOneUser(id: number): Promise<UserEntity>;
    update(id: number, createUserDto: UserEntity): Promise<void>;
    addNew(createUserDto: UserEntity): Promise<UserEntity>;
    delete(id: number): Promise<void>;
}
