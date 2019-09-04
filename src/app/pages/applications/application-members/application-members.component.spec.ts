import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMembersComponent } from './application-members.component';

describe('ApplicationMembersComponent', () => {
  let component: ApplicationMembersComponent;
  let fixture: ComponentFixture<ApplicationMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
