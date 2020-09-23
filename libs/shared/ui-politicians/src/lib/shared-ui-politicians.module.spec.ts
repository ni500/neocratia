import { async, TestBed } from '@angular/core/testing';
import { SharedUiPoliticiansModule } from './shared-ui-politicians.module';

describe('SharedUiPoliticiansModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiPoliticiansModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiPoliticiansModule).toBeDefined();
  });
});
