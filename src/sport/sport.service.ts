import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';

import { Sport } from './entities/sport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable, switchMap } from 'rxjs';


@Injectable()
export class SportService {
  constructor(
    @InjectRepository(Sport)
    private SportRepository: Repository<Sport>
) { }

  create(createSportDto: CreateSportDto) {
    return this.SportRepository.save(createSportDto);
  }

  findAll() {
    return this.SportRepository.find();
  }

  async  findOne(id: number) {
    await this.SportRepository.findOne(id);
  }

update(id: number, updateSportDto: UpdateSportDto) {
    return this.SportRepository.update(id, updateSportDto);
  }

  async  remove(id: number) {
    await this.SportRepository.delete(id);
  }

  /*updateOne(id: number, sport : Sport): Observable<any> {
   /* delete sport.discription;
    delete sport.categorie;
    delete sport.name;*//*

    return from(this.SportRepository.update(id, sport)).pipe(
        switchMap(() => this.findOne(id))
    );
}*/
public async setImage(id: number, sportImage: string){
    this.SportRepository.update(id, {sportImage: sportImage});
}
  
}
