import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsAndGuidesComponent } from './trips-and-guides.component';

describe('TripsAndGuidesComponent', () => {
  let component: TripsAndGuidesComponent;
  let fixture: ComponentFixture<TripsAndGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsAndGuidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripsAndGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
