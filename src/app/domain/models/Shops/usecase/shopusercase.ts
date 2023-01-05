import { Injectable } from "@angular/core";
import { ShopGateway } from "../gateway/shop-gateway";
import { Product } from "../product";
import { Shop } from "../shop";

@Injectable({
    providedIn: 'root'
})

export class ShopUseCase {

    constructor(private _shopGateway: ShopGateway){}
    getallshops(){
        //TODO implementacion de la logica de negocio
        return this._shopGateway.getallshops();
    }

    getproductsbyshop(id:string){
        //TODO implementacion de la logica de negocio
        return this._shopGateway.getproductsbyshop(id);
    }
    addShop(shop: Shop) {
        return this._shopGateway.addShop(shop);
    }
    addProduct(product: Product) {
        return this._shopGateway.addProduct(product);
    }
}