import { Injectable } from "@angular/core";
import { UserGateway } from "../geteway/user-gateway";

import { Token } from "../token";
import { User } from "../user";

@Injectable({
    providedIn:'root'
})
export class UserUseCase{
    public get userGategay(): UserGateway {
        return this._userGategay;
    }
    public set userGategay(value: UserGateway) {
        this._userGategay = value;
    }
    constructor(private _userGategay: UserGateway){}
    login(email:string,password:string){
         return this._userGategay.login(email,password);
    }
    register(user:User) {
        return this._userGategay.register(user);
    }
    getinfouser(token:Token) {
        return this._userGategay.getinfouser(token);
        

    }
}