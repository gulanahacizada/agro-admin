import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from 'src/app/interfaces/response';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { AboutService } from '../../services/about.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-editAbout',
  templateUrl: './editAbout.component.html',
  styleUrls: ['./editAbout.component.scss']
})
export class EditAboutComponent implements OnInit {
  aboutInfo: any;
  id: '';
  langList: SelectItem[];
  selectLang: any;
  editAboutForm: FormGroup;
  imgURL: any;
  file: any;
  fileRaw: string;
  url: string;

  constructor(
    private aboutService: AboutService,
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

  onSelectLang(event) {
    this.selectLang = event.value;
  }


  ngOnInit() {
    this.getAboutById();
    this.createAboutAddForm();
    this.selectLang = 1;
  }

  createAboutAddForm() {
    this.editAboutForm = this.fb.group({
      title_az: ['', Validators.required],
      title_en: [''],
      title_ru: [''],
      body_az: ['', Validators.required],
      body_ru: [''],
      body_en: [''],
      image: []
    });
  }

  getAboutById() {
    this.aboutService.getAboutById(this.id).subscribe((response: Response) => {
      this.aboutInfo = response.responseContent;
      this.editAboutForm.patchValue({
        title_az: this.aboutInfo.title_az,
        title_en: this.aboutInfo.title_en,
        title_ru: this.aboutInfo.title_ru,
        body_az: this.aboutInfo.body_az,
        body_ru: this.aboutInfo.body_ru,
        body_en: this.aboutInfo.body_en,
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
    if (this.editAboutForm.valid) {
      this.aboutService.editAbout(this.editAboutForm.value, this.id, this.file).subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigate(['/about']);
        }
      });
    }
  }

}
