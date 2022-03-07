import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { plainToClass, plainToInstance } from "class-transformer";
import { ShowUserDto } from "src/users/dtos/show-user.dto";

export function Serialize(dto : any){
    return UseInterceptors(new SerializerInterceptor(dto))
}

export class SerializerInterceptor implements NestInterceptor{
    constructor(private dto : any){}
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data : any) =>{
                return plainToInstance(this.dto , data , {
                    excludeExtraneousValues : true
                })
            })
        ) 
        
    }
}