import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile, Request , Res } from '@nestjs/common';

import { BirdService } from './bird.service';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { catchError, map, Observable, tap, of, pipe} from 'rxjs';


import { diskStorage } from 'multer';

import { v4 as uuidv4 } from 'uuid';
import path = require('path');



@Controller('bird')
export class BirdController {
    SERVER_URL:  string  =  "http://192.168.33.10:3002/bird/";
  constructor(private readonly birdService: BirdService) {}

  @Post('create')
  create(@Body() createBirdDto: CreateBirdDto) {
    return this.birdService.create(createBirdDto);
  }

  @Get('')
  findAll() {
    return this.birdService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.birdService.findOne(+id);
  }


  @Put('updatebird/:id')
  update(@Param('id') id: string, @Body() updateBirdDto: UpdateBirdDto) {
    return this.birdService.update(+id, updateBirdDto);
  }

  @Delete('deletebird/:id')
  remove(@Param('id') id: string) {
    return this.birdService.remove(+id);
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file',{
      storage: diskStorage({
        destination: './uploads',
        filename:(req, file, cb)=> {
            const filname: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;
            cb(null,`${filname}${extension}` )
        }
      })
      
  }))
  uploadFile(@Param('id') id, @UploadedFile() file)  {
      
      return this.birdService.setImage( Number(id) , `${this.SERVER_URL}${file.path}`);

      }
      
      @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads'});
  }
       
}

