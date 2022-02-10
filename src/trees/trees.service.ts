import { Injectable } from '@nestjs/common';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';

import { Tree } from './entities/tree.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class TreesService {
  constructor(
    @InjectRepository(Tree)
    private TreeRepository: Repository<Tree>
) { }

  create(createTreeDto: CreateTreeDto) {
    return this.TreeRepository.save(createTreeDto);
  }

  findAll() {
    return this.TreeRepository.find();
  }

  async  findOne(id: number) {
    await this.TreeRepository.findOne(id);
  }

  async   update(id: number, updateTreeDto: UpdateTreeDto) {
    await this.TreeRepository.update(id, updateTreeDto);
  }

  async  remove(id: number) {
    await this.TreeRepository.delete(id);
  }
}
