import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioReservasComponent } from './horario-reservas.component';

describe('HorarioReservasComponent', () => {
  let component: HorarioReservasComponent;
  let fixture: ComponentFixture<HorarioReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorarioReservasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorarioReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
