import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../modules/home/home.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from '../../modules/cart/cart.component';
import { AccountComponent } from '../../modules/account/account.component';
import { ShopsComponent } from '../../modules/shops/shops.component';
import { ProductsbyshopComponent } from '../../modules/productsbyshop/productsbyshop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CartComponent,
    AccountComponent,
    ShopsComponent,
    ProductsbyshopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,  
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
