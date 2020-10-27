import { HttpStatus } from '@nestjs/common';
export declare class PhotosController {
    uploadedFile(file: any): Promise<{
        status: HttpStatus;
        message: string;
        data: {
            originalname: any;
            filename: any;
        };
    }>;
    uploadMultipleFiles(files: any): Promise<{
        status: HttpStatus;
        message: string;
        data: any[];
    }>;
}
