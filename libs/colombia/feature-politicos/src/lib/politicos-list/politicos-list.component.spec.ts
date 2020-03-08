import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticosListComponent } from './politicos-list.component';

describe('PoliticosListComponent', () => {
  let component: PoliticosListComponent;
  let fixture: ComponentFixture<PoliticosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
