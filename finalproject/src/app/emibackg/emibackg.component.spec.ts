import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmibackgComponent } from './emibackg.component';

describe('EmibackgComponent', () => {
  let component: EmibackgComponent;
  let fixture: ComponentFixture<EmibackgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmibackgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmibackgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
