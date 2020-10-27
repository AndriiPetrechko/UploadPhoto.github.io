import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { PhotosService } from './photos/photos.service';
import { PhotosModule } from './photos/photos.module';
import { PhotosController } from './photos/photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Photo} from "./photos/entity/Photo";

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    PhotosModule
  ],
  controllers: [AppController, PhotosController],
  providers: [AppService, PhotosService],
})
export class AppModule {}
