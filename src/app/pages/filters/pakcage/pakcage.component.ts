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

}
