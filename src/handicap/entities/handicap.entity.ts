import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Handicap {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    discription: string;

    @Column('text')
    historique: string;

    @Column( { nullable: true })
    
    handicapImage : string;

}

@EntityRepository(Handicap)
export class HandicapRepository extends Repository<Handicap>{}