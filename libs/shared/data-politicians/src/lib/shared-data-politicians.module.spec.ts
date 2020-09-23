import { async, TestBed } from '@angular/core/testing';
import { SharedDataPoliticiansModule } from './shared-data-politicians.module';

describe('SharedDataPoliticiansModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataPoliticiansModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDataPoliticiansModule).toBeDefined();
  });
});
