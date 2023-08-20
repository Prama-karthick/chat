import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcrewComponent } from './newcrew.component';

describe('NewcrewComponent', () => {
  let component: NewcrewComponent;
  let fixture: ComponentFixture<NewcrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
