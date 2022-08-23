import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartdoubleComponent } from './barchartdouble.component';

describe('BarchartdoubleComponent', () => {
  let component: BarchartdoubleComponent;
  let fixture: ComponentFixture<BarchartdoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartdoubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartdoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
