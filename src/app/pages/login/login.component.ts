import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  login() {
    if (this.loginForm.valid) {
      const data = Object.assign({}, this.loginForm.value);
      this.appService.login(data).subscribe((response: Response) => {
        if (response.responseCode == 1) {
          localStorage.setItem('acc_jwt', response.responseContent.access_token);
          window.location.href = '/home';
        }
        if (response.responseCode == 2) {
          this.errorMessage = response.responseMessage;
        }
      });
    }
  }

}
