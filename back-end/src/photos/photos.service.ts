import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { Photo} from './entity/Photo';

@Injectable()
export class PhotosService {
    constructor(
        @InjectRepository(Photo)
        private photosRepository: Repository<Photo>,
      ) {}
    
      findAll(): Promise<Photo[]> {
        return this.photosRepository.find();
      }
      
      create(photo: Photo): Promise<Photo> {
        return this.photosRepository.save(photo);
    }
}

      


 