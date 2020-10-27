import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {Photo} from "./photos/entity/Photo";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'zx1234',
      database: 'photo_db',
      entities: [
        Photo
      ],
      synchronize: true,
      autoLoadEntities: true,
}