import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // See if email is in use
    console.log("signing email", email, password); //DELETE THIS
    const users: User[] = await this.usersService.find(email);
    if (users.length > 0) {
      throw new BadRequestException("User already exist");
    } else {
    }
  }
  // hash the users password
  //create a new user and save it
  // return the user

  signin() {}
}
