import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { AgronomistsService } from '../../services/agronomists.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-editAgronom',
  templateUrl: './editAgronom.component.html',
  styleUrls: ['./editAgronom.component.scss']
})
export class EditAgronomComponent implements OnInit {

  id: '';
  agronomInfo: any;
  agronomEditForm: FormGroup;
  imgURL: any;
  file: any;
  fileRaw: string;
  url: string;
  langList: SelectItem[];
  selectLang: any;

  constructor(
    private agronomService: AgronomistsService,
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
    this.createAgronomEditForm();
    this.getAgronomById();
    this.selectLang = 1;
  }

  onSelectLang(event) {
    this.selectLang = event.value;
  }

  createAgronomEditForm() {
    this.agronomEditForm = this.fb.group({
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

  getAgronomById() {
    this.agronomService.getAgronomById(this.id).subscribe((response: Response) => {
      this.agronomInfo = response.responseContent;
      this.agronomEditForm.patchValue({
        title_az: this.agronomInfo.title_az,
        title_ru: this.agronomInfo.title_ru,
        title_en: this.agronomInfo.title_en,
        description_az: this.agronomInfo.description_az,
        description_ru: this.agronomInfo.description_ru,
        description_en: this.agronomInfo.description_en,
        body_az: this.agronomInfo.body_az,
        body_ru: this.agronomInfo.body_ru,
        body_en: this.agronomInfo.body_en,
      });
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
    if (this.agronomEditForm.valid) {
      this.agronomService.editAgronom(this.agronomEditForm.value, this.id, this.file).subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigate(['/agronoms']);
        }
      });
    }
  }

  deleteAgronom() {
    this.agronomService.deleteAgronomById(this.agronomInfo.id).subscribe((res) => {
      if (res.responseCode == 1) {
        this.router.navigate(['/agronoms']);
      }
    });
  }

}
