import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile, Request , Res } from '@nestjs/common';

import { TreesService } from './trees.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { catchError, map, Observable, tap, of, pipe} from 'rxjs';


import { diskStorage } from 'multer';

import { v4 as uuidv4 } from 'uuid';
import path = require('path');



@Controller('trees')
export class TreesController {
    SERVER_URL:  string  =  "http://192.168.33.10:3002/trees/";
  constructor(private readonly treesService: TreesService) {}

  @Post('create')
  create(@Body() createTreeDto: CreateTreeDto) {
    return this.treesService.create(createTreeDto);
  }

  @Get('')
  findAll() {
    return this.treesService.findAll();
  }

  @Get('tree/:id')
  findOne(@Param('id') id: string) {
    return this.treesService.findOne(+id);
  }

  @Put('updatetree/:id')
  update(@Param('id') id: string, @Body() updateTreeDto: UpdateTreeDto) {
    return this.treesService.update(+id, updateTreeDto);
  }

  @Delete('deletetree/:id')
  remove(@Param('id') id: string) {
    return this.treesService.remove(+id);
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
      
      return this.treesService.setImage( Number(id) , `${this.SERVER_URL}${file.path}`);

      }
      
      @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads'});
  }
       
}

