import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancefilterComponent } from './advancefilter.component';

describe('AdvancefilterComponent', () => {
  let component: AdvancefilterComponent;
  let fixture: ComponentFixture<AdvancefilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancefilterComponent]
    });
    fixture = TestBed.createComponent(AdvancefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
