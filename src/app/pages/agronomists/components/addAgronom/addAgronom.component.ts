import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AgronomistsService } from '../../services/agronomists.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-addAgronom',
  templateUrl: './addAgronom.component.html',
  styleUrls: ['./addAgronom.component.scss']
})
export class AddAgronomComponent implements OnInit {

  addAgronomForm: FormGroup;
  imgURL: any;
  file: any;
  fileRaw: string;
  url: string;
  langList: SelectItem[];
  selectLang: any;

  constructor(
    private agronomService: AgronomistsService,
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
    this.addAgronomForm = this.fb.group({
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
    console.log(this.addAgronomForm.value);
    if (this.addAgronomForm.valid) {
      this.agronomService.createAgronom(this.addAgronomForm.value, this.file).subscribe( () => {
        this.router.navigate(['/agronoms']);
      });
    }
  }

}
