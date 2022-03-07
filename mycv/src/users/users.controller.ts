import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ShowUserDto } from './dtos/show-user.dto';
import { AuthService } from './auth.service';
import { currentUser } from './decorators/current-user.decorator';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { AuthGuard } from './guards/auth.guard';


@Controller('auth')
@Serialize(ShowUserDto)
@UseInterceptors(CurrentUserInterceptor)
export class UsersController {

     constructor(private UserService : UsersService , private AuthService : AuthService){}

    @Post('/signup')
    async createUser(@Body() body : CreateUserDto , @Session() session : any){
    const user =await this.AuthService.signup(body.email , body.password)
    session.userId = user.id;
    return user
    }
     
    @Post('/signin')
    async signin(@Body() body : CreateUserDto , @Session() session : any){
      const user = await this.AuthService.signin(body.email , body.password)
      session.userId = user.id;
      return user;
    }
    @Post('/signout')
    signout(@Session() session : any){
      session.userId = null
    }
    @Get('whoami')
    @UseGuards(AuthGuard)
    async whoAmI(@currentUser() user : string){
      return user
    }
    @Get('/:id')
    // @UseInterceptors(new SerializerInterceptor(ShowUserDto))
    findOne(@Param('id') id : string){
      console.log('Inside Interceptor');
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
