import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Targets } from 'src/targets/entities/targets.entity';

export enum CommentEnum {
    ok = 'ok',
    like = 'like',
    dislike = 'dislike'
}

@Entity('target_options')
export class TargetOptions {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    orgId: number;

    @Column()
    userId: number;
    
    @Column()
    targetId: number
    
    @Column()
    question: string
    
    @Column()
    comment: CommentEnum

    @ManyToOne(() => Targets, (target) => target.targetOptions, {eager: true})
    target: Targets;
}
