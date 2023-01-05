
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/domain/models/Shops/product';
import { ShopUseCase } from 'src/app/domain/models/Shops/usecase/shopusercase';

@Component({
  selector: 'app-productsbyshop',
  templateUrl: './productsbyshop.component.html',
  styleUrls: ['./productsbyshop.component.css']
})
export class ProductsbyshopComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private _shopUseCase: ShopUseCase) { }
  private sub: any;
  products: Product[] | undefined;
  shopname!: string;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.shopname = params['shopname']
      this._shopUseCase.getproductsbyshop(params['id']).subscribe((data: Product[]) => {
        this.products = data;
      })
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}