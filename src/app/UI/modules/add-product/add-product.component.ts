import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/domain/models/Shops/product';
import { ShopUseCase } from 'src/app/domain/models/Shops/usecase/shopusercase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private _shopUseCase: ShopUseCase) { }

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    price: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    image: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    category_id: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    shop_id: [
      { type: 'required', message: 'Este campo es requerido' }
    ]
  };
  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      image: ['',
        [
          Validators.required,
        ]
      ],
      price: ['',
        [
          Validators.required,
          
        ]
      ],
      category_id: ['',
        [
          Validators.required,
          
        ]
      ],
      shop_id: ['',
        [
          Validators.required,
          
        ]
      ]
    })
  }
  public get f() {
    return this.addProductForm.controls
  }
  addProduct() {
    if (this.addProductForm.valid) {
      var product = new Product;
      product.name = this.addProductForm.controls['name'].value;
      product.price = this.addProductForm.controls['price'].value;
      product.image = this.addProductForm.controls['image'].value;


      this._shopUseCase.addProduct(product).subscribe((data: Product) => {
        if (data) {
          Swal.fire({
            title: 'Usuario Creado',
            text: 'El usuario ' + data.name + ' fue creado exitosamente',
            icon: 'success',
            confirmButtonText: 'continuar'
          })
        }
        else {
          Swal.fire({
            title: 'Usuario No Creado',
            text: 'El usuario no pudo ser creado',
            icon: 'error',
            confirmButtonText: 'continuar'
          })
        }
      })
    }
  }
}
