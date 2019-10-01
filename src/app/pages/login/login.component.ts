import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

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
      console.log(data);
      this.appService.login(data).subscribe( (response) => {
        localStorage.setItem('acc_jwt', response.responseContent.access_token);
        this.router.navigate(['/home']);
        console.log(response);
      });
    }
  }

}
