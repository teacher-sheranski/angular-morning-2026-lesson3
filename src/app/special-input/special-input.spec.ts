import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialInput } from './special-input';

describe('SpecialInput', () => {
  let component: SpecialInput;
  let fixture: ComponentFixture<SpecialInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
