import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Tree {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    discription: string;

    @Column()
    historique: string;

    @Column( { nullable: true })
    
    treeImage: string;

}

@EntityRepository(Tree)
export class TreeRepository extends Repository<Tree>{}

