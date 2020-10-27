import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosController } from './photos.controller';
import { Photo } from './entity/Photo';
import { PhotosService } from '../../dist/photos/photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  exports: [TypeOrmModule],
  providers: [PhotosService],
  controllers: [PhotosController],
})
export class PhotosModule {}
