import { async, TestBed } from '@angular/core/testing';
import { SharedUiMainNavModule } from './shared-ui-main-nav.module';

describe('SharedUiMainNavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiMainNavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiMainNavModule).toBeDefined();
  });
});
