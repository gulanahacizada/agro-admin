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
      console.log(this.qualityes);
    });
  }

  createAddQualityForm() {
    this.addQualityForm = this.fb.group({
      name_az:     [, Validators.required],
      name_ru:     [, Validators.required],
      name_en:     [, Validators.required],
    });
  }

  onSubmit() {
    if (this.addQualityForm.valid) {
      this.qualityService.addQuality(this.addQualityForm.value).subscribe( () => {
        this.addQualityForm.reset();
        this.getAllQuality();
      });
    }
  }

}
