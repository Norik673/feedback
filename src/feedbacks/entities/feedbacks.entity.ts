import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Targets } from 'src/targets/entities/targets.entity';

export enum TypeEnum {
    x = 'x',
    a = 'a'
}

@Entity('feedbacks')
export class Feedbacks {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    targetId: number;
    
    @Column({nullable: true})
    grade?: number;
    
    @Column({nullable: true})
    comment?: string;
    
    @Column({nullable: true})
    type?: TypeEnum;
    
    @ManyToOne(() => Targets, (target) => target.feedbacks, {eager: true})
    target: Targets;
}
