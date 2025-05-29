import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Feedbacks } from 'src/feedbacks/entities/feedbacks.entity';
import { TargetOptions } from 'src/target-options/entities/target-options.entity';

@Entity('targets')
export class Targets {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orgId: number;

    @Column({nullable: true})
    rating?: number;

    @Column()
    name: string;
    
    @OneToMany(() => Feedbacks, (feedback) => feedback.target)
    feedbacks: Feedbacks[];

    @OneToMany(() => TargetOptions, (targetOption) => targetOption.target)
    targetOptions: TargetOptions[];
}

