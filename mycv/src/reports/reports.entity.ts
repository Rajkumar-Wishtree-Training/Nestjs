import { Entity , Column , PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ReportsEntity{

    @PrimaryGeneratedColumn()
    id : string

    @Column()
    price : number
}