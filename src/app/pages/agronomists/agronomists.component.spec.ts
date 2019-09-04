import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomistsComponent } from './agronomists.component';

describe('AgronomistsComponent', () => {
  let component: AgronomistsComponent;
  let fixture: ComponentFixture<AgronomistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgronomistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
