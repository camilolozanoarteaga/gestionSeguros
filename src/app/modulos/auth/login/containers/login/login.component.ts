import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  actionInProgress: boolean;

  NoNlogin: boolean;
  NoNloginMsg: String;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
  ) { }

  ngOnInit() {

    this.NoNlogin = false;

    this.loginForm = this._fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });

  }

  // COMPONENT METHODS ---------------------------------------------------------

  signInWithEmail(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.NoNlogin = false;

    this._authService.signIn(email, password)
      .then((login: any) => {

        if (login.operationType === 'signIn') {
          this._router.navigate(['/dashboard']);
        }

      }).catch((err) => {

        this.NoNlogin = true;
        
        if (err.code === 'auth/wrong-password') {

          this.NoNloginMsg = 'La contraseña no coincide con el usuarios.';

        }

        if (err.code === 'auth/user-not-found') {

          this.NoNloginMsg = 'El usuario no existe.';

        }

      });

  }

}
