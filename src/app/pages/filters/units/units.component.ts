import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/interfaces/response';
import { UnitsService } from './services/units.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  units: any;
  addUnitForm: FormGroup;
  unitDetail: any;
  errorMessage: any;

  constructor(
    private unitService: UnitsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createAddUnitForm();
    this.getAllUnits();
  }

  getAllUnits() {
    this.unitService.getAllUnits().subscribe((response: Response) => {
      this.units = response.responseContent;
    });
  }

  createAddUnitForm() {
    this.addUnitForm = this.fb.group({
      name_az: [, Validators.required],
      name_ru: [, Validators.required],
      name_en: [, Validators.required],
      id: null
    });
  }

  onSubmit() {
    if (this.addUnitForm.valid) {
      this.unitService.addUnit(this.addUnitForm.value).subscribe((res: any) => {
        if (res.responseCode == 1) {
          this.addUnitForm.reset();
          this.getAllUnits();
        }
      });
    }
  }

  getUnitById(id: any) {
    this.unitService.getUnitId(id).subscribe((response: Response) => {
      this.unitDetail = response.responseContent;
      this.addUnitForm.patchValue({
        name_az: this.unitDetail.name_az,
        name_en: this.unitDetail.name_en,
        name_ru: this.unitDetail.name_ru,
        id: this.unitDetail.id
      });
    });
  }

  deleteUnit() {
    this.unitService.deleteUnit(this.unitDetail.id).subscribe((response: Response) => {
      if (response.responseCode == 1) {
        this.addUnitForm.reset();
        this.getAllUnits();
      } else if (response.responseCode == 2) {
        this.errorMessage = response.responseMessage;
      }
    });
  }

  reset() {
    this.addUnitForm.reset();
    this.unitDetail = {};
  }

}
