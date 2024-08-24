import { BadRequestException } from "@nestjs/common";

export class DuplicateEmailException extends BadRequestException {
  constructor(email: string) {
    super(`Email address ${email} already exists`);
  }
}
