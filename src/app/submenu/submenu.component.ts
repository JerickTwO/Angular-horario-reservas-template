import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioReservasComponent } from '../horario-reservas/horario-reservas.component';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, HorarioReservasComponent],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css',
})
export class SubmenuComponent {
  @Input() laboratorios: any[] = [];
  @Input() reservas: any[] = [
    {
      idLaboratorio: 'lab1',
      dia: 'Lunes',
      hora_inicio: '08:30',
      hora_fin: '10:00',
      fecha: 'Lunes',
      tipo: 'clase',
    },
    {
      idLaboratorio: 'lab1',
      dia: 'Martes',
      hora_inicio: '10:00',
      hora_fin: '11:30',
      fecha: 'Martes',
      tipo: 'practica',
    },
    {
      idLaboratorio: 'lab2',
      dia: 'Miércoles',
      hora_inicio: '13:00',
      hora_fin: '14:30',
      fecha: 'Miércoles',
      tipo: 'examen',
    },
    {
      idLaboratorio: 'lab3',
      dia: 'Jueves',
      hora_inicio: '16:00',
      hora_fin: '17:30',
      fecha: 'Jueves',
      tipo: 'clase',
    },
    {
      idLaboratorio: 'lab2',
      dia: 'Viernes',
      hora_inicio: '19:00',
      hora_fin: '20:30',
      fecha: 'Viernes',
      tipo: 'practica',
    },
  ];

  laboratorioSeleccionado: any | null = null;
  opcionSeleccionada: string = '';

  seleccionarLaboratorio(lab: any) {
    this.laboratorioSeleccionado = lab;
  }

  seleccionarOpcion(opcionId: string) {
    this.opcionSeleccionada = opcionId;
  }
}
