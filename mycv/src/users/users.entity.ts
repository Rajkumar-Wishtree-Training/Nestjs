import { Exclude } from "class-transformer";
import { Entity , PrimaryGeneratedColumn, Column, AfterInsert, AfterUpdate, AfterRecover, AfterRemove } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    // @Exclude()
    password : string;

    @AfterInsert()
    logInsert(){
        console.log("Document Inserted");
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Document Updated");
        
    }

    @AfterRemove()
    logRemove(){
        console.log("Document Removed");
        
    }

}