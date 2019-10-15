import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-addNew',
  templateUrl: './addNew.component.html',
  styleUrls: ['./addNew.component.scss']
})
export class AddNewComponent implements OnInit {

  addNewsForm: FormGroup;
  imgURL: any;
  file: any;
  fileRaw: string;
  url: string;
  langList: SelectItem[];
  selectLang: any;

  constructor(
    private newService: NewsService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.langList = [
      { label: 'Az', value: '1' },
      { label: 'Ru', value: '2' },
      { label: 'En', value: '3' },
    ];
  }

  ngOnInit() {
    this.createNewsAddForm();
    this.selectLang = 1;
  }

  onSelectLang(event) {
    this.selectLang = event.value;
  }

  createNewsAddForm() {
    this.addNewsForm = this.fb.group({
      description_az: ['', Validators.required],
      description_ru: [''],
      description_en: [''],
      title_az: ['', Validators.required],
      title_en: [''],
      title_ru: [''],
      body_az: ['', Validators.required],
      body_ru: [''],
      body_en: [''],
      image: [],
      navigatorUrl: 'users'
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
    if (this.addNewsForm.valid) {
      this.newService.createNews(this.addNewsForm.value, this.file).subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigate(['/news']);
        }
      });
    }
  }

}
