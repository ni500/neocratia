import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticoPageComponent } from './politico-page.component';

describe('PoliticoPageComponent', () => {
  let component: PoliticoPageComponent;
  let fixture: ComponentFixture<PoliticoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
