import { Component, OnInit } from '@angular/core';
import { KindsService } from './services/kinds.service';
import { Response } from 'src/app/interfaces/response';
import { Category } from 'src/app/interfaces/category';
import { SelectList } from 'src/app/interfaces/selectList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kinds',
  templateUrl: './kinds.component.html',
  styleUrls: ['./kinds.component.scss']
})
export class KindsComponent implements OnInit {

  kinds: any;
  categoryList: Category[];
  selectCategoryList: SelectList[];
  subCategoryList: SelectList[];
  subCategory: any;
  addKindForm: FormGroup;

  constructor(
    private kindService: KindsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllKind();
    this.getAllSubCategory();
    this.createAddKindForm();
  }

  getAllKind() {
    this.kindService.getKind().subscribe((response: Response) => {
      this.kinds = response.responseContent;
      console.log(this.kinds);
    });
  }

  getAllSubCategory() {
    this.kindService.getAllSubCategory().subscribe((response: Response) => {
      this.categoryList = response.responseContent;
      this.selectCategoryList = (this.categoryList || []).map((r: any) => ({
        label: r.name,
        value: r
      }));
    });
  }

  onSelectCategory(event) {
    this.subCategory = event.value.sub_categories;
    this.subCategoryList = (this.subCategory || []).map((r: any) => ({
      label: r.name,
      value: r.id
    }));
  }

  createAddKindForm() {
    this.addKindForm = this.fb.group({
      name_az:     [, Validators.required],
      name_ru:     [, Validators.required],
      name_en:     [, Validators.required],
      category_id: [, Validators.required],
    });
  }

  onSubmit() {
    if (this.addKindForm.valid) {
      console.log(this.addKindForm.value);
      this.kindService.addKind(this.addKindForm.value).subscribe( () => {
        this.addKindForm.reset();
        this.getAllKind();
      });
    }

  }

  addKind() {
    if (this.addKindForm.valid) {
      this.kindService.addKind(this.addKindForm.value).subscribe( () => {
        this.addKindForm.reset();
        this.getAllKind();
      });
    }
  }
}
