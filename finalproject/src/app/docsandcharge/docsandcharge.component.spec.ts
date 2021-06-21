import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsandchargeComponent } from './docsandcharge.component';

describe('DocsandchargeComponent', () => {
  let component: DocsandchargeComponent;
  let fixture: ComponentFixture<DocsandchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsandchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsandchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
