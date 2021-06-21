import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalbasedtableComponent } from './salbasedtable.component';

describe('SalbasedtableComponent', () => {
  let component: SalbasedtableComponent;
  let fixture: ComponentFixture<SalbasedtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalbasedtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalbasedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
