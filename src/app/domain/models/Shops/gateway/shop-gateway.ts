import { Observable } from "rxjs";
import { Product } from "../product";
import { Shop } from "../shop";


export abstract class ShopGateway {
    
    abstract getallshops(): Observable<Shop[]>;
    abstract getproductsbyshop(id:string): Observable<Product[]>;
    abstract addShop(shop:Shop):Observable<Shop>;
    abstract addProduct(product:Product):Observable<Product>;
}