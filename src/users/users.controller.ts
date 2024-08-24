import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { DuplicateEmailException } from "./CustomExceptions/duplicate-email.exception";

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
          "`Failed to persist User with email ${body.email} because of ${err.message}`"
        );
      }
    }
  }

  get() {}
}
