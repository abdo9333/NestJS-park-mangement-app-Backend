import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile, Request , Res } from '@nestjs/common';

import { HandicapService } from './handicap.service';
import { CreateHandicapDto } from './dto/create-handicap.dto';
import { UpdateHandicapDto } from './dto/update-handicap.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { catchError, map, Observable, tap, of, pipe} from 'rxjs';


import { diskStorage } from 'multer';

import { v4 as uuidv4 } from 'uuid';
import path = require('path');



@Controller('handicap')
export class HandicapController {
    SERVER_URL:  string  =  "http://192.168.33.10:3002/handicap/";
  constructor(private readonly handicapService: HandicapService) {}

  @Post('create')
  create(@Body() createHandicapDto: CreateHandicapDto) {
    return this.handicapService.create(createHandicapDto);
  }

  @Get('')
  findAll() {
    return this.handicapService.findAll();
  }

  @Get('handicap/:id')
  findOne(@Param('id') id: number) {
    return this.handicapService.findOne(+id);
  }

  @Put('updatehandicap/:id')
  update(@Param('id') id: string, @Body() updatehandicapDto: UpdateHandicapDto) {
    return this.handicapService.update(+id, updatehandicapDto);
  }

  @Delete('deletehandicap/:id')
  remove(@Param('id') id: string) {
    return this.handicapService.remove(+id);
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
      
      return this.handicapService.setImage( Number(id) , `${this.SERVER_URL}${file.path}`);

      }
      
      @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads'});
  }
       
}

