import { Controller, Get, Post, Request, UseInterceptors, UploadedFile, Param, Res, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Photo } from './entity/Photo';
import { PhotosService } from './photos.service';
import { Observable, of } from 'rxjs';
import { CreateDto, UpdateDto } from './dto';
import { diskStorage } from 'multer';
import path = require('path');
import { join } from 'path';

export const storage = {
  storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
          const filename: string = path.parse(file.originalname).name.replace(/\s/g, '');
          const extension: string = path.parse(file.originalname).ext;

          cb(null, `${filename}${extension}`)
      }
  })
}

@Controller('photos')
export class PhotosController {

  constructor(private readonly photoService: PhotosService) {}   

  @Post('image/upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file, @Request() req): Promise<Photo> {
      const newPhoto = new Photo;
        newPhoto.fieldname = file.fieldname;
        newPhoto.originalname = file.originalname;
        newPhoto.encoding = file.encoding;
        newPhoto.mimetype = file.mimetype;
        newPhoto.destination = file.destination;
        newPhoto.filename = file.filename;
        newPhoto.path = file.path;
        newPhoto.size = file.size;
        console.log(newPhoto);
        return this.photoService.create(newPhoto);
    }

  @Get('uploads/:imagename')
    findImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(),'uploads/' + imagename)));
    }
  
  @Get()
  findAll() {
        return this.photoService.findAll()
    }

}
