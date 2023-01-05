import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from '../../modules/login/login.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../modules/register/register.component';
import { AddShopComponent } from '../../modules/add-shop/add-shop.component';
import { AddProductComponent } from '../../modules/add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    RegisterComponent,
    AddShopComponent,
    AddProductComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FullwidthModule {  
  constructor(library: FaIconLibrary) {
  library.addIcons(
    faEye
  );
} }
