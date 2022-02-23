import { Module } from '@nestjs/common';
import { HandicapService } from './handicap.service';
import { HandicapController } from './handicap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Handicap } from './entities/handicap.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Handicap])],
  controllers: [HandicapController],
  providers: [HandicapService]
})
export class HandicapModule {}