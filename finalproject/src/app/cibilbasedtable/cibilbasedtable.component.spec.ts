import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilbasedtableComponent } from './cibilbasedtable.component';

describe('CibilbasedtableComponent', () => {
  let component: CibilbasedtableComponent;
  let fixture: ComponentFixture<CibilbasedtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilbasedtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilbasedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
