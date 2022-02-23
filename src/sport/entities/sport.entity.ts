import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Sport {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    discription: string;

    @Column()
    categorie: string;

    @Column( { nullable: true })
    
    sportImage: string;

}

@EntityRepository(Sport)
export class SportRepository extends Repository<Sport>{}

