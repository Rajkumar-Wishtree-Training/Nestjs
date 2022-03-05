import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MessageDto } from './dtos/message.dto';
import { MessageService } from './message.service';


@Controller('messages')
export class MessagesController {
 constructor(private messageService : MessageService){}
    @Get()
    findAll(){
        return this.messageService.findAll()
    }

    @Get('/:id')
    async findOne(@Param('id') id : any){
        const message = await this.messageService.findOne(id)
        if(!message){
           return new NotFoundException('data not found')
        }
        return message
    }


    @Post()
    createMessage(@Body() body : MessageDto){
           return this.messageService.create(body.content)
    }

    // @Get('/:id')
    // getMessage(@Param() id : any){
    //     console.log(id)
    // }
}
