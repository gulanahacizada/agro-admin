import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-userEdit',
  templateUrl: './userEdit.component.html',
  styleUrls: ['./userEdit.component.scss']
})
export class UserEditComponent implements OnInit {


  id: '';
  userInfo: any;
  userUpdateForm: FormGroup;

  constructor(
    private userService: UsersService,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id = this.activateRoute.snapshot.params.id;
  }



  ngOnInit() {
    this.getUserById();
    this.ctreateForm();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe((response: Response) => {
      this.userInfo = response.responseContent;
      this.userUpdateForm.patchValue({
        description_az: this.userInfo.description_az,
        description_ru: this.userInfo.description_ru,
        description_en: this.userInfo.description_en,
      });
    });
  }

  ctreateForm() {
    this.userUpdateForm = this.fb.group({
      description_az: ['', Validators.required],
      description_ru: [''],
      description_en: [''],
      navigatorUrl: 'users'
    });
  }

  onSubmit() {
    if (this.userUpdateForm.valid) {
      this.userService.updateUser(this.id, this.userUpdateForm.value).subscribe((response: Response) => {
        if (response.responseCode == 1) {
          // this.router.navigate(['/users']);
        }
      });
    }
  }

}
