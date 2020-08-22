import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl(''),
      qtyKids: new FormControl(''),
      ageKids: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  registerWithMail() {
    this.authService.createAccountWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.name,
      this.registerForm.value.age, this.registerForm.value.qtyKids, this.registerForm.value.ageKids);
    this.registerForm.setValue({
      name: '',
      email: '',
      password: '',
      age: '',
      qtyKids: '',
      ageKids: ''
    });

  }


}
