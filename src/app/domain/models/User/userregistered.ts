import { User } from "./user";

export class UserRegistered extends User {
    _id!:string;
    createdAt!:string;
    updatedAt!:string;
    role!:Int32Array;
}