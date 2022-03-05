import { Injectable } from "@nestjs/common";
import { readFile , writeFile } from "fs/promises";

@Injectable()
export class MessageRepository{
    
    async findOne(id : string){
        console.log(id);
        
        const content =  await readFile('messages.json' , "utf8");
        const messages = JSON.parse(content)
 
        return messages[id]
    }

    async findAll(){
        const content = await readFile('messages.json' , 'utf8')
        const messages = JSON.parse(content)

        return messages
    }

    async create(content : string){
        console.log(content);
        
        const contents = await readFile('messages.json' , 'utf8')
        const messages = JSON.parse(contents)
        const id = Math.floor(Math.random() * 999);
        messages[id] = {id , content}
        return writeFile('messages.json' , JSON.stringify(messages) )
    }
}