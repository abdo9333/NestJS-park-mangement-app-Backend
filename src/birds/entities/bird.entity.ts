import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Bird {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    discription: string;

    @Column('text')
    species: string;

    @Column( { nullable: true })
    
    birdImage: string;

}

@EntityRepository(Bird)
export class BirdRepository extends Repository<Bird>{}