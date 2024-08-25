import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { DuplicateEmailException } from "./CustomExceptions/duplicate-email.exception";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Serializer } from "../interceptors/serialize.interceptor";

import { UserDto } from "./dto/user.dto";

@Serializer(UserDto)
@Controller("auth")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/signup")
  async createUser(@Body() body: CreateUserDto) {
    try {
      await this.usersService.create(body.email, body.password);
      console.log(
        `User with email ${body.email} was successfully added to the database`
      );
    } catch (err) {
      // Handle specific errors or use NestJS exceptions here
      // For example:
      if (err instanceof DuplicateEmailException) {
        throw new BadRequestException("Email already exists");
      } else {
        throw new InternalServerErrorException(
          `Failed to persist User with email ${body.email} because of ${err.message}`
        );
      }
    }
  }

  @Get("/:id")
  findUser(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Get()
  async findAllUser(@Query("email") email: string) {
    return this.usersService.find(email);
  }

  @Patch("/:id")
  async updateUser(@Body() body: UpdateUserDto, @Param("id") id: string) {
    return this.usersService.update(+id, body);
  }

  @Delete("/:id")
  async removeUser(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
