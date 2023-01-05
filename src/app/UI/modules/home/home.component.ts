import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/domain/models/Shops/shop';
import { ShopUseCase } from 'src/app/domain/models/Shops/usecase/shopusercase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _shopUseCase: ShopUseCase) { }
  shops: Shop[] | undefined;
  ngOnInit(): void {
    this._shopUseCase.getallshops().subscribe((data: Shop[]) => {
      this.shops = data;
    })
  }
}