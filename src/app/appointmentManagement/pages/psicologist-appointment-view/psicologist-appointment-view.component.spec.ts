import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologistAppointmentViewComponent } from './psicologist-appointment-view.component';

describe('PsicologistAppointmentViewComponent', () => {
  let component: PsicologistAppointmentViewComponent;
  let fixture: ComponentFixture<PsicologistAppointmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicologistAppointmentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsicologistAppointmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
