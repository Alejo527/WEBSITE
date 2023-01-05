import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserUseCase } from 'src/app/domain/models/User/usecase/userusecase';
import { User } from 'src/app/domain/models/User/user';
import { UserRegistered } from 'src/app/domain/models/User/userregistered';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _userUseCase: UserUseCase) { }

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    document: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Este campo es de tipo teléfono' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Solo se permiten emails' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo debe tener minimo 8 caracteres' }
    ]
  };
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      document: ['',
        [
          Validators.required,
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.pattern(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }
  public get f() {
    return this.signupForm.controls
  }
  register() {
    if (this.signupForm.valid) {
      var user = new User;
      user.document = this.signupForm.controls['document'].value;
      user.email = this.signupForm.controls['email'].value;
      user.name = this.signupForm.controls['name'].value;
      user.password = this.signupForm.controls['password'].value;
      user.phone = this.signupForm.controls['phone'].value;
      this._userUseCase.register(user).subscribe((data: UserRegistered) => {
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