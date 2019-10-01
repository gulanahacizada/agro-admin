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
  categoryAddForm: FormGroup;

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
        label: r.name_az,
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
    });
  }

  onSubmit() {
    if (this.categoryAddForm.valid) {
      this.clean(this.categoryAddForm.value);
      console.log(this.categoryAddForm.value);
      this.categoryService.addCategory(this.categoryAddForm.value).subscribe( () => {
        this.categoryAddForm.reset();
        this.getAllCategory();
      });
    }

  }

  clean(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName][0] == [""]) {
        delete obj[propName];
      }
    }
  }

}
