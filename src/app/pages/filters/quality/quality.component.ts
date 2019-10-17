import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/interfaces/response';
import { QualityService } from './services/quality.service';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {

  qualityes: any;
  addQualityForm: FormGroup;
  qualityDetail: any;
  errorMessage: string;

  constructor(
    private qualityService: QualityService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createAddQualityForm();
    this.getAllQuality();
  }

  getAllQuality() {
    this.qualityService.getAllQuality().subscribe((response: Response) => {
      this.qualityes = response.responseContent;
    });
  }

  createAddQualityForm() {
    this.addQualityForm = this.fb.group({
      name_az: [, Validators.required],
      name_ru: [, Validators.required],
      name_en: [, Validators.required],
      id: null
    });
  }

  onSubmit() {
    if (this.addQualityForm.valid) {
      this.qualityService.addQuality(this.addQualityForm.value).subscribe((res: any) => {
        if (res.responseCode == 1) {
          this.addQualityForm.reset();
          this.getAllQuality();
        }
      });
    }
  }

  getQualityById(id: any) {
    this.qualityService.getQualityById(id).subscribe((response: Response) => {
      console.log(response.responseContent);
      this.qualityDetail = response.responseContent;
      this.addQualityForm.patchValue({
        name_az: this.qualityDetail.name_az,
        name_en: this.qualityDetail.name_en,
        name_ru: this.qualityDetail.name_ru,
        id: this.qualityDetail.id
      });
    });
  }

  deleteCategory() {
    this.qualityService.deleteQuality(this.qualityDetail.id).subscribe((response: Response) => {
      if (response.responseCode == 1) {
        this.addQualityForm.reset();
        this.getAllQuality();
      } else if (response.responseCode == 2) {
        this.errorMessage = response.responseMessage;
        console.log(this.errorMessage);
      }
    });
  }

}
