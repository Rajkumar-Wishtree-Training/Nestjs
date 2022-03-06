import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

     constructor(private UserService : UsersService){}

    @Post('/signup')
    createUser(@Body() body : CreateUserDto){
      this.UserService.create(body.email , body.password)
    }

    @Get('/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    findOne(@Param('id') id : string){
    return this.UserService.findOne(parseInt(id));
    }

    @Get()
    find(@Query('email') email : string){
    return this.UserService.find(email)
    }

    @Delete('/:id')
    remove(@Param('id') id : string){
      return this.UserService.remove(parseInt(id))
    }

    @Patch('/:id')
    update(@Param('id') id : string , @Body() body : UpdateUserDto){
      return this.UserService.update(parseInt(id) , body)
    }
}
