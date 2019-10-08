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
      console.log(this.units);
    });
  }

  createAddUnitForm() {
    this.addUnitForm = this.fb.group({
      name_az:     [, Validators.required],
      name_ru:     [, Validators.required],
      name_en:     [, Validators.required],
    });
  }

  onSubmit() {
    if (this.addUnitForm.valid) {
      this.unitService.addUnit(this.addUnitForm.value).subscribe( () => {
        this.addUnitForm.reset();
        this.getAllUnits();
      });
    }
  }

}
