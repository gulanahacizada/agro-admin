import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMembersComponent } from './request-members.component';

describe('RequestMembersComponent', () => {
  let component: RequestMembersComponent;
  let fixture: ComponentFixture<RequestMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
