import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchpageComponent } from './researchpage.component';

describe('ResearchpageComponent', () => {
  let component: ResearchpageComponent;
  let fixture: ComponentFixture<ResearchpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchpageComponent]
    });
    fixture = TestBed.createComponent(ResearchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
