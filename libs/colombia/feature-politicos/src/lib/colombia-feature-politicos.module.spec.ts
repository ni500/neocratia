import { async, TestBed } from '@angular/core/testing';
import { ColombiaFeaturePoliticosModule } from './colombia-feature-politicos.module';

describe('ColombiaPoliticosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ColombiaFeaturePoliticosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ColombiaFeaturePoliticosModule).toBeDefined();
  });
});
