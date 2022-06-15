import { Repository } from 'typeorm';
import { UserEntity } from './entity/users.entity';
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, users: UserEntity): Promise<void>;
    addNew(users: UserEntity): Promise<UserEntity>;
    deleteOne(id: number): Promise<void>;
}
