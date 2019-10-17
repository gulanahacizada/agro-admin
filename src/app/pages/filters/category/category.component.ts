import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Response } from 'src/app/interfaces/response';
import { Category } from 'src/app/interfaces/category';
import { SelectList } from 'src/app/interfaces/selectList';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[];
  selectCategoryList: SelectList[];
  show: boolean;
  edit = true;
  // subCategory = true;
  // mainCategory = true;
  categoryAddForm: FormGroup;
  categoryDetail: any;
  errorMessage: string;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getAllCategory();
    this.show = false;
    this.createAddCategoryForm();
  }

  getAllCategory() {
    this.categoryService.getCategory().subscribe((response: Response) => {
      this.categoryList = response.responseContent;
      this.selectCategoryList = (this.categoryList || []).map((r: any) => ({
        label: r.name,
        value: r.id
      }));
    });
  }

  OnSelect() {
    this.show = !this.show;
  }

  createAddCategoryForm() {
    this.categoryAddForm = this.fb.group({
      name_az: [, Validators.required],
      name_ru: [, Validators.required],
      name_en: [, Validators.required],
      parent_id: [],
      id: null
    });
  }

  getCategoryById(id: any) {
    this.categoryService.getCategoryById(id).subscribe((response: Response) => {
      console.log(response.responseContent);
      this.categoryDetail = response.responseContent;
      this.edit = false;
      if (this.categoryDetail.parent_id) {
        this.show = true;
      } else {
        this.show = false;
      }
      this.categoryAddForm.patchValue({
        name_az: this.categoryDetail.name_az,
        name_en: this.categoryDetail.name_en,
        name_ru: this.categoryDetail.name_ru,
        parent_id: this.categoryDetail.parent_id,
        id: this.categoryDetail.id
      });
    });
  }

  onSubmit() {
    if (this.categoryAddForm.valid) {
      this.clean(this.categoryAddForm.value);
      this.categoryService.addCategory(this.categoryAddForm.value).subscribe((res: any) => {
        if (res.responseCode == 1) {
          this.categoryAddForm.reset();
          this.getAllCategory();
        }
      });
    }

  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.categoryDetail.id).subscribe((response: Response) => {
      if (response.responseCode == 1) {
        this.categoryAddForm.reset();
        this.getAllCategory();
      } else if (response.responseCode == 2) {
        this.errorMessage = response.responseMessage;
        console.log(this.errorMessage);
      }
    });
  }

  clean(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName][0] == [""]) {
        delete obj[propName];
      }
    }
  }

  resetAll() {
    this.categoryAddForm.reset();
    this.show = false;
    this.edit = true;
    this.categoryDetail = {};
    console.log(this.categoryDetail);
    
  }

}
