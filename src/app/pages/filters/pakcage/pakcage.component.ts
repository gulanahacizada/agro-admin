import { Component, OnInit } from '@angular/core';
import { PakcageService } from './services/pakcage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-pakcage',
  templateUrl: './pakcage.component.html',
  styleUrls: ['./pakcage.component.scss']
})
export class PakcageComponent implements OnInit {

  packeges: any;
  addPackegForm: FormGroup;
  packegDetail: any;
  errorMessage: any;

  constructor(
    private packegService: PakcageService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllPackeg();
    this.createAddPackegForm();
  }

  getAllPackeg() {
    this.packegService.getAllPackeg().subscribe((response: Response) => {
      this.packeges = response.responseContent;
    });
  }

  createAddPackegForm() {
    this.addPackegForm = this.fb.group({
      name_az: [, Validators.required],
      name_ru: [, Validators.required],
      name_en: [, Validators.required],
      id: null
    });
  }

  onSubmit() {
    if (this.addPackegForm.valid) {
      this.packegService.addPackeg(this.addPackegForm.value).subscribe((res: any) => {
        if (res.responseCode == 1) {
          this.addPackegForm.reset();
          this.getAllPackeg();
        }
      });
    }
  }


  getPackegById(id: any) {
    this.packegService.getPackegById(id).subscribe((response: Response) => {
      console.log(response.responseContent);
      this.packegDetail = response.responseContent;
      this.addPackegForm.patchValue({
        name_az: this.packegDetail.name_az,
        name_en: this.packegDetail.name_en,
        name_ru: this.packegDetail.name_ru,
        id: this.packegDetail.id
      });
    });
  }


  deletePackeg() {
    this.packegService.deletePackeg(this.packegDetail.id).subscribe((response: Response) => {
      if (response.responseCode == 1) {
        this.addPackegForm.reset();
        this.getAllPackeg();
      } else if (response.responseCode == 2) {
        this.errorMessage = response.responseMessage;
      }
    });
  }

  reset() {
    this.addPackegForm.reset();
    this.packegDetail = {};
  }

}
