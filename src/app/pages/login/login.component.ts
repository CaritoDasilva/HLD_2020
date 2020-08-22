import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl('')
    })

  }

  ngOnInit(): void {
  }

  signInWithMail() {
    this.authService.signInWithMailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(response => {
      console.log(response)
    }).catch(error => console.log(error));
  }

}
