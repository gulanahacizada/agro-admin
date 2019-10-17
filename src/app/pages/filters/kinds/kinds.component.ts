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
  kindDetail: any;
  errorMessage: any;
  edit = false;

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
      name_az: [, Validators.required],
      name_ru: [, Validators.required],
      name_en: [, Validators.required],
      category_id: [, Validators.required],
      id: null,
      parentId: null
    });
  }

  onSubmit() {
    if (this.addKindForm.valid) {
      this.kindService.addKind(this.addKindForm.value).subscribe((res: any) => {
        if (res.responseCode == 1) {
          this.addKindForm.reset();
          this.getAllKind();
        }
      });
    }
  }

  addKind() {
    if (this.addKindForm.valid) {
      this.kindService.addKind(this.addKindForm.value).subscribe((response: Response) => {
        if (response.responseCode == 1) {
          this.addKindForm.reset();
          this.getAllKind();
        }
      });
    }
  }

  getKindById(id: any) {
    this.kindService.getKindById(id).subscribe((response: Response) => {
      console.log(response.responseContent);
      this.kindDetail = response.responseContent;
      this.subCategoryList = (response.responseContent.parent_catregory.sub_categories || []).map((r: any) => ({
        label: r.name,
        value: r.id
      }));
      this.edit = true;
      this.addKindForm.patchValue({
        name_az: this.kindDetail.name_az,
        name_en: this.kindDetail.name_en,
        name_ru: this.kindDetail.name_ru,
        category_id: this.kindDetail.category.id,
        id: this.kindDetail.id,
        parentId: this.kindDetail.parent_catregory.id,
      });
      console.log(this.addKindForm.value);
    });
  }


  deleteKind() {
    this.kindService.deleteKind(this.kindDetail.id).subscribe((response: Response) => {
      if (response.responseCode == 1) {
        this.addKindForm.reset();
        this.getAllKind();
      } else if (response.responseCode == 2) {
        this.errorMessage = response.responseMessage;
        console.log(this.errorMessage);
      }
    });
  }

  reset() {
    this.addKindForm.reset();
    this.edit = false;
    this.kindDetail = {};
  }
}
