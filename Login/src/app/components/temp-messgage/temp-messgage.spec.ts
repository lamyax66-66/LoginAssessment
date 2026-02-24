import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMessgage } from './temp-messgage';

describe('TempMessgage', () => {
  let component: TempMessgage;
  let fixture: ComponentFixture<TempMessgage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempMessgage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempMessgage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
