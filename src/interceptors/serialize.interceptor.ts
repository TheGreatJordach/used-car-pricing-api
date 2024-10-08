import {
  UseInterceptors,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ClassConstructor, plainToInstance } from "class-transformer";

export function Serializer<T>(dto: ClassConstructor<T>) {
  return UseInterceptors(new SerializerInterceptor(dto));
}

export class SerializerInterceptor<T> implements NestInterceptor {
  constructor(private dto: ClassConstructor<T>) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        // Conversion process : Turn data into instance of UserDto
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true, // Thanks to this properties only field with @Expose() will be used
        });
      })
    );
  }
}
