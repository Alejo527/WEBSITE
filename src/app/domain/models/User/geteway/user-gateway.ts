import { Observable } from "rxjs";
import { Token } from "../token";
import { User } from "../user";
import { UserRegistered } from "../userregistered";

export abstract class UserGateway{
    abstract login(email:string,password:string):Observable<Token>;
    abstract register(user:User): Observable<UserRegistered>;
    abstract getinfouser(token:Token): Observable<UserRegistered>;
}