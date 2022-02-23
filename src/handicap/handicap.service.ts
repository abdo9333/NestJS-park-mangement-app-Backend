import { Injectable } from '@nestjs/common';
import { CreateHandicapDto } from './dto/create-handicap.dto';
import { UpdateHandicapDto } from './dto/update-handicap.dto';

import { Handicap } from './entities/handicap.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable, switchMap } from 'rxjs';


@Injectable()
export class HandicapService {
  constructor(
    @InjectRepository(Handicap)
    private HandicapRepository: Repository<Handicap>
) { }

  create(createHandicapDto: CreateHandicapDto) {
    return this.HandicapRepository.save(createHandicapDto);
  }

  findAll() {
    return this.HandicapRepository.find();
  }

  async  findOne(id: number) {
    await this.HandicapRepository.findOne(id);
  }

update(id: number, updateHandicapDto: UpdateHandicapDto) {
    return this.HandicapRepository.update(id, updateHandicapDto);
  }

  async  remove(id: number) {
    await this.HandicapRepository.delete(id);
  }

  /*updateOne(id: number, handicap : Handicap): Observable<any> {
   /* delete handicap.discription;
    delete handicap.historique;
    delete handicap.name;*//*

    return from(this.HandicapRepository.update(id, handicap)).pipe(
        switchMap(() => this.findOne(id))
    );
}*/

  
}