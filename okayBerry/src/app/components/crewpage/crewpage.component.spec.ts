import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewpageComponent } from './crewpage.component';

describe('CrewpageComponent', () => {
  let component: CrewpageComponent;
  let fixture: ComponentFixture<CrewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
