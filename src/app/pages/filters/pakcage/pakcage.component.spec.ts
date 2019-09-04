import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakcageComponent } from './pakcage.component';

describe('PakcageComponent', () => {
  let component: PakcageComponent;
  let fixture: ComponentFixture<PakcageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakcageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakcageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
