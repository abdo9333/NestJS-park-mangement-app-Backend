import { Injectable } from '@nestjs/common';
import { CreateTreeDto } from './dto/create-tree.dto';
import { UpdateTreeDto } from './dto/update-tree.dto';

import { Tree } from './entities/tree.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable, switchMap } from 'rxjs';


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

  /*async  findOne(id: number) {
    await this.TreeRepository.findOne(id);
  }*/
  findOne(id: number): Promise<Tree> {
    return this.TreeRepository.findOne(id);
  }



  async  remove(id: number) {
    await this.TreeRepository.delete(id);
  }
  update(id: number, updateTreeDto: UpdateTreeDto) {
    return this.TreeRepository.update(id, updateTreeDto);
  }

  updateOne(id: number, tree: Tree): Observable<any> {
    delete tree.name;
    delete tree.discription;
    delete tree.historique;

    return from(this.TreeRepository.update(id, tree)).pipe(
        switchMap(() => this.findOne(id))
    );
}


  /*updateOne(id: number, tree : Tree): Observable<any> {
   /* delete tree.discription;
    delete tree.historique;
    delete tree.name;*//*

    return from(this.TreeRepository.update(id, tree)).pipe(
        switchMap(() => this.findOne(id))
    );
}*/
public async setImage(id: number, treeImage: string){
    this.TreeRepository.update(id, {treeImage: treeImage});
}
  
}
