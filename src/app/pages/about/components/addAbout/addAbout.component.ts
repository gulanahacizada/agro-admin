import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AboutService } from '../../services/about.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-addAbout',
  templateUrl: './addAbout.component.html',
  styleUrls: ['./addAbout.component.scss']
})
export class AddAboutComponent implements OnInit {

  langList: SelectItem[];
  selectLang: any;
  addAboutForm: FormGroup;
  imgURL: any;
  file: any;
  fileRaw: string;
  url: string;

  constructor(
    private aboutService: AboutService,
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
    this.createAboutAddForm();
    this.selectLang = 1;
  }

  onSelectLang(event) {
    this.selectLang = event.value;
    console.log(this.selectLang);
  }

  createAboutAddForm() {
    this.addAboutForm = this.fb.group({
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
    if (this.addAboutForm.valid) {
      this.aboutService.createAbout(this.addAboutForm.value, this.file).subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigate(['/about']);
        }
      });
    }
  }

}
