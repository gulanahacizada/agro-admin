import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-editNew',
  templateUrl: './editNew.component.html',
  styleUrls: ['./editNew.component.scss']
})
export class EditNewComponent implements OnInit {

  id: '';
  newInfo: any;
  newEditForm: FormGroup;
  imgURL: any;
  file: any;
  fileRaw: string;
  url: string;
  langList: SelectItem[];
  selectLang: any;

  constructor(
    private newServices: NewsService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
  this.id = this.activateRoute.snapshot.params.id;
  this.langList = [
      { label: 'Az', value: '1' },
      { label: 'Ru', value: '2' },
      { label: 'En', value: '3' },
    ];
  }

  ngOnInit() {
    this.getNewById();
    this.createNewEditForm();
    this.selectLang = 1;
  }

  onSelectLang(event) {
    this.selectLang = event.value;
    console.log(this.selectLang);
  }

  clean(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName][0] == [""]) {
        delete obj[propName];
      }
    }
  }

  getNewById() {
    this.newServices.getNewById(this.id).subscribe((response: Response) => {
      this.newInfo = response.responseContent;
      this.newEditForm.patchValue({
        title_az: this.newInfo.title_az,
        title_ru: this.newInfo.title_ru,
        title_en: this.newInfo.title_en,
        description_az: this.newInfo.description_az,
        description_ru: this.newInfo.description_ru,
        description_en: this.newInfo.description_en,
        body_az: this.newInfo.body_az,
        body_ru: this.newInfo.body_ru,
        body_en: this.newInfo.body_en,
      });
      console.log(this.newInfo);
    });
  }

  createNewEditForm() {
    this.newEditForm = this.fb.group({
      description_az: ['', Validators.required],
      description_ru: [''],
      description_en: [''],
      title_az: ['', Validators.required],
      title_en: [''],
      title_ru: [''],
      body_az: ['', Validators.required],
      body_ru: [''],
      body_en: [''],
      image: []
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      this.file = file;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgURL = reader.result;
        this.fileRaw = (<string>reader.result).split(',')[1];
        this.url = reader.result.toString();
      };
    }
  }

  deletePhoto() {
    this.fileRaw = null;
    this.url = null;
    $('#photo').val('');
  }

  onSubmit() {
    if (this.newEditForm.valid) {
      console.log(this.newEditForm.value);
      this.newServices.editNews(this.newEditForm.value, this.id, this.file).subscribe(() => {
        this.router.navigate(['/news']);
      });
    }
  }

  deleteNew() {
    this.newServices.deleteNewById(this.newInfo.id).subscribe(() => {
      this.router.navigate(['/news']);
    });
  }


}
