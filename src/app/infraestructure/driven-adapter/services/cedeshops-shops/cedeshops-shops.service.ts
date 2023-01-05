import { Injectable } from '@angular/core';
import { Product } from 'src/app/domain/models/Shops/product';
import { Shop } from 'src/app/domain/models/Shops/shop';
import { GenericService } from '../helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class CedeshopsShopsService {

  private _url = 'http://localhost:3001'
  constructor(private genericService: GenericService) { }
  getallshops() {
    return this.genericService.get<Shop[]>(this._url, 'shops');
  }
  getproductsbyshop(id: string) {
    return this.genericService.get<Product[]>(this._url, 'products', 'shop_id=' + id);
  }
   addShop(shop: Shop) {
    return this.genericService.post<Shop>(this._url, 'shops', 'shop');
    }
    addProduct(shop: Shop) {
      return this.genericService.post<Product>(this._url, 'shops','product');
    
  }
}
