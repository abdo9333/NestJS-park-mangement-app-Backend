import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Sport {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    discription: string;

    @Column('text')
    categorie: string;

    @Column( { nullable: true })
    
    sportImage: string;

}

@EntityRepository(Sport)
export class SportRepository extends Repository<Sport>{}

