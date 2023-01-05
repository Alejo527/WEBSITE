import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/domain/models/User/token';
import { UserUseCase } from 'src/app/domain/models/User/usecase/userusecase';

import { UserRegistered } from 'src/app/domain/models/User/userregistered';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private _userUseCase: UserUseCase) { }
  user = new UserRegistered;
  ngOnInit(): void {
    var token = new Token;
    token.token = localStorage.getItem('token');
    this._userUseCase.getinfouser(token).subscribe((data:UserRegistered) => {
      this.user = data;
    })
  }

}
