import { Module } from '@nestjs/common';
import { BirdService } from './bird.service';
import { BirdController } from './bird.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bird } from './entities/bird.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Bird])],
  controllers: [BirdController],
  providers: [BirdService]
})
export class BirdModule {}