import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetVoteComponent } from './set-vote.component';

describe('SetVoteComponent', () => {
  let component: SetVoteComponent;
  let fixture: ComponentFixture<SetVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
