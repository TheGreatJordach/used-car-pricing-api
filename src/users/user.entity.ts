import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  password: string;
  @Column()
  email: string;

  @AfterInsert()
  logInsert() {
    console.log("Inserted User with id ", this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log("Updated User with id ", this.id);
  }

  @AfterRemove()
  LogRemove() {
    console.log("Removed User with id ", this.id);
  }
}
