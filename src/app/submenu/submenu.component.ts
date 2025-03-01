import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioReservasComponent } from '../horario-reservas/horario-reservas.component';

interface Laboratorio {
  id: string;
  nombre: string;
  opciones: { id: string; nombre: string }[];
}

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, HorarioReservasComponent], 
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css',
})
export class SubmenuComponent {
  @Input() laboratorios: Laboratorio[] = []; 
  @Input() reservas: any[] = []; // 🔹 Recibe todas las reservas

  laboratorioSeleccionado: Laboratorio | null = null;
  opcionSeleccionada: string = '';

  seleccionarLaboratorio(lab: Laboratorio) {
    this.laboratorioSeleccionado = lab;
    this.opcionSeleccionada = lab.opciones[0]?.id || '';
  }

  seleccionarOpcion(opcionId: string) {
    this.opcionSeleccionada = opcionId;
  }
}
