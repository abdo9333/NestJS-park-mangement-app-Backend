import { Injectable } from '@nestjs/common';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

import { Bird } from './entities/bird.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable, switchMap } from 'rxjs';


@Injectable()
export class BirdService {
  constructor(
    @InjectRepository(Bird)
    private BirdRepository: Repository<Bird>
) { }

  create(createBirdDto: CreateBirdDto) {
    return this.BirdRepository.save(createBirdDto);
  }

  findAll() {
    return this.BirdRepository.find();
  }

  findOne(id: number) {
    return this.BirdRepository.findOne(id);
  }



update(id: number, updateBirdDto: UpdateBirdDto) {
    return this.BirdRepository.update(id, updateBirdDto);
  }

  async  remove(id: number) {
    await this.BirdRepository.delete(id);
  }

  /*updateOne(id: number, bird : Bird): Observable<any> {
   /* delete bird.discription;
    delete bird.historique;
    delete bird.name;*//*

    return from(this.BirdRepository.update(id, bird)).pipe(
        switchMap(() => this.findOne(id))
    );
}*/
public async setImage(id: number, birdImage: string){
    this.BirdRepository.update(id, {birdImage: birdImage});
}
  
}
