import { Category } from "./category";
import { Shop } from "./shop";

export class Product {
    _id!:string;
    name!: string;
    price!:string;
    image!:string;
    category_id!:Category;
    shop_id!:Shop;
    createdAt!:string;
    updatedAt!:string
}