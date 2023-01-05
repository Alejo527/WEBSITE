import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/domain/models/Shops/shop';
import { ShopUseCase } from 'src/app/domain/models/Shops/usecase/shopusercase';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  constructor(private _shopUseCase: ShopUseCase) { }
  shops: Shop[] | undefined;
  ngOnInit(): void {
    this._shopUseCase.getallshops().subscribe((data: Shop[]) => {
      this.shops = data;
    })
  }
}
