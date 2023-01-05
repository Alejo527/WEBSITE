import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shop } from 'src/app/domain/models/Shops/shop';
import { ShopUseCase } from 'src/app/domain/models/Shops/usecase/shopusercase';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private _shopUseCase: ShopUseCase) { }

    addShopForm!:FormGroup;

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    image: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    location: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    category: [
      { type: 'required', message: 'Este campo es requerido' }
    ]
  };
  ngOnInit(): void {
    this.addShopForm = this.formBuilder.group({
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
      location: ['',
        [
          Validators.required,
          
        ]
      ],
      category: ['',
        [
          Validators.required,
          
        ]
      ]
    })
  }
  public get f() {
    return this.addShopForm.controls
  }
  addShop() {
    if (this.addShopForm.valid) {
      var shop = new Shop;
      shop.name = this.addShopForm.controls['name'].value;
      shop.image = this.addShopForm.controls['image'].value;
      shop.location = this.addShopForm.controls['location'].value;
      shop.category = this.addShopForm.controls['category'].value;

      this._shopUseCase.addShop(shop).subscribe((data: Shop) => {
        if (data) {

          Swal.fire({
            title: 'Tienda Creada',
            text: 'Tienda ' + data.name + ' registrada exitosamente',
            icon: 'success',
            confirmButtonText: 'continuar'
          })
        }
        else {
          Swal.fire({
            title: 'Tienda No Creada',
            text: 'La tienda no pudo crearse',
            icon: 'error',
            confirmButtonText: 'continuar'
          })
        }
      })
    }
  }
}
