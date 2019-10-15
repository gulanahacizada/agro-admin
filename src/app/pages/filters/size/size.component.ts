import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/interfaces/response';
import { SizeService } from './services/size.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  kalibryList: any;
  addKalibryForm: FormGroup;

  constructor(
    private kalibryService: SizeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllKalibry();
    this.createAddKalibryForm();
  }

  getAllKalibry() {
    this.kalibryService.getAllKalibry().subscribe((response: Response) => {
      this.kalibryList = response.responseContent;
    });
  }

  createAddKalibryForm() {
    this.addKalibryForm = this.fb.group({
      name_az: [, Validators.required],
      name_ru: [, Validators.required],
      name_en: [, Validators.required],
    });
  }

  onSubmit() {
    if (this.addKalibryForm.valid) {
      this.kalibryService.addKalibry(this.addKalibryForm.value).subscribe((res: any) => {
        if (res.responseCode == 1) {
          this.addKalibryForm.reset();
          this.getAllKalibry();
        }
      });
    }
  }

}
