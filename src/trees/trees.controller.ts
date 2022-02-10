import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TreesService } from './trees.service';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';

@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post('create')
  create(@Body() createTreeDto: CreateTreeDto) {
    return this.treesService.create(createTreeDto);
  }

  @Get('trees')
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
}
