import { Component, OnInit } from '@angular/core';
import { AgronomistsService } from './services/agronomists.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-agronomists',
  templateUrl: './agronomists.component.html',
  styleUrls: ['./agronomists.component.scss']
})
export class AgronomistsComponent implements OnInit {

  agronomsList: any;
  serchValue = '';

  constructor(
    private agronomService: AgronomistsService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getAllAgronoms();
    }, 400);
  }

  getAllAgronoms() {
    this.agronomService.getAllAgronoms().subscribe((response: Response) => {
      this.agronomsList = response.responseContent.data;
      console.log(this.agronomsList);
    });
  }

  filterAgronoms() {
    this.agronomService.getAllAgronoms({like: this.serchValue}).subscribe((response: Response) => {
      this.agronomsList = response.responseContent.data;
    });
  }

}
