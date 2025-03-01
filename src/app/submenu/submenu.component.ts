import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioReservasComponent } from '../horario-reservas/horario-reservas.component';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, HorarioReservasComponent],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css',
})
export class SubmenuComponent implements OnInit {
  @Input() laboratorios: any[] = [];
  @Input() reservas: any[] = [];

  @Output() labSeleccionado = new EventEmitter<string>();
  @Output() opcionSeleccionada = new EventEmitter<string>();

  laboratorioSeleccionado: any | null = null;
  opcionActiva: string = '';

  ngOnInit() {
    if (this.laboratorios.length > 0) {
      this.laboratorioSeleccionado = this.laboratorios[0];
      this.labSeleccionado.emit(this.laboratorioSeleccionado.id);
    }
  }

  seleccionarLaboratorio(lab: any) {
    this.laboratorioSeleccionado = lab;
    this.labSeleccionado.emit(lab.id);
  }

  seleccionarOpcion(opcionId: string) {
    this.opcionActiva = opcionId;
    this.opcionSeleccionada.emit(opcionId);
  }
}
