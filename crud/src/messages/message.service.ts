import { Body, Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessageService{
    constructor(private messagesRepo : MessageRepository){}

    findOne(id : string){
       return this.messagesRepo.findOne(id)
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(body : any){
         return this.messagesRepo.create(body)
    }
}