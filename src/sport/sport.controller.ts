import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile, Request , Res } from '@nestjs/common';

import { SportService } from './sport.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { catchError, map, Observable, tap, of, pipe} from 'rxjs';


import { diskStorage } from 'multer';

import { v4 as uuidv4 } from 'uuid';
import path = require('path');



@Controller('sport')
export class SportController {
    SERVER_URL:  string  =  "http://192.168.33.10:3002/sport/";
  constructor(private readonly sportService: SportService) {}

  @Post('create')
  create(@Body() createSportDto: CreateSportDto) {
    return this.sportService.create(createSportDto);
  }

  @Get('')
  findAll() {
    return this.sportService.findAll();
  }

  @Get('sport/:id')
  findOne(@Param('id') id: string) {
    return this.sportService.findOne(+id);
  }

  @Put('updatesport/:id')
  update(@Param('id') id: string, @Body() updateSportDto: UpdateSportDto) {
    return this.sportService.update(+id, updateSportDto);
  }

  @Delete('deletesport/:id')
  remove(@Param('id') id: string) {
    return this.sportService.remove(+id);
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
      
      return this.sportService.setImage( Number(id) , `${this.SERVER_URL}${file.path}`);

      }
      
      @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads'});
  }
       
}

