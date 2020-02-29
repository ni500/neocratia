import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoliticianComponent } from './create-politician.component';

describe('CreatePoliticianComponent', () => {
  let component: CreatePoliticianComponent;
  let fixture: ComponentFixture<CreatePoliticianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePoliticianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
