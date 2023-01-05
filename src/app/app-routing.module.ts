import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { FullwidthComponent } from './UI/layouts/fullwidth/fullwidth.component';
import { AccountComponent } from './UI/modules/account/account.component';
import { AddProductComponent } from './UI/modules/add-product/add-product.component';
import { AddShopComponent } from './UI/modules/add-shop/add-shop.component';
import { CartComponent } from './UI/modules/cart/cart.component';
import { HomeComponent } from './UI/modules/home/home.component';
import { LoginComponent } from './UI/modules/login/login.component';
import { ProductsbyshopComponent } from './UI/modules/productsbyshop/productsbyshop.component';
import { RegisterComponent } from './UI/modules/register/register.component';
import { ShopsComponent } from './UI/modules/shops/shops.component';
import { AuthGuard } from './UI/shared/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent
    }]
  },
  {
    path: 'default',
    component: DefaultComponent,
    children: [
      {
        path: 'cart',
        canActivate: [AuthGuard],
        component: CartComponent
      },
      {
        path: 'account',
        canActivate: [AuthGuard],
        component: AccountComponent
      },
      {
        path: 'shops',
        component: ShopsComponent
      }
      ,
      {
        path: 'products/:shopname/:id',
        component: ProductsbyshopComponent
      }
    ]
  },
  {
    path: 'full', 
    component: FullwidthComponent,
    children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'addShop',
      component: AddShopComponent
    },
    {
      path: 'addProduct',
      component: AddProductComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
