import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './entity/stores.entity';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
  imports: [HttpModule,TypeOrmModule.forFeature([StoreEntity])],
  controllers: [StoresController],
  providers: [StoresService]
})
export class StoresModule {}
