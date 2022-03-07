import { Entity, Column, PrimaryGeneratedColumn, EntityRepository, Repository } from 'typeorm';

@Entity()
export class Tree {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    discription: string;

    @Column('text')
    historique: string;

    @Column('text', { nullable: true })
    
    treeImage: string;

}

@EntityRepository(Tree)
export class TreeRepository extends Repository<Tree>{}

