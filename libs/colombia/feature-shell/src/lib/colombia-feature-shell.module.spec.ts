import { async, TestBed } from '@angular/core/testing';
import { ColombiaFeatureShellModule } from './colombia-feature-shell.module';

describe('ColombiaFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ColombiaFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ColombiaFeatureShellModule).toBeDefined();
  });
});
