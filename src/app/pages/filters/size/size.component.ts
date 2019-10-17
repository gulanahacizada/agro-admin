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
  kalibryDetail: any;
  errorMessage: any;

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
      id: null
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

  getKalibryById(id: any) {
    this.kalibryService.getKalibryById(id).subscribe((response: Response) => {
      console.log(response.responseContent);
      this.kalibryDetail = response.responseContent;
      this.addKalibryForm.patchValue({
        name_az: this.kalibryDetail.name_az,
        name_en: this.kalibryDetail.name_en,
        name_ru: this.kalibryDetail.name_ru,
        id: this.kalibryDetail.id
      });
    });
  }

  deleteKalibry() {
    this.kalibryService.deleteKalibry(this.kalibryDetail.id).subscribe((response: Response) => {
      if (response.responseCode == 1) {
        this.addKalibryForm.reset();
        this.getAllKalibry();
      } else if (response.responseCode == 2) {
        this.errorMessage = response.responseMessage;
      }
    });
  }

  reset() {
    this.addKalibryForm.reset();
    this.kalibryDetail = {};
  }

}
