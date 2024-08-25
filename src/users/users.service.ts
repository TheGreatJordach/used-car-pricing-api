import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async create(email: string, password: string) {
    const user = this.userRepository.create({ email, password });
    return await this.userRepository.save(user);
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
  find(email: string) {
    return this.userRepository.find({
      where: {
        email,
      },
    });
  }
  async update(id: number, updateDto: Partial<User>) {
    const user = await this.userRepository.preload({
      id,
      ...updateDto,
    });
    return await this.userRepository.save(user);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
