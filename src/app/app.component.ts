import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorarioReservasComponent } from './horario-reservas/horario-reservas.component';
import { SubmenuComponent } from './submenu/submenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HorarioReservasComponent, SubmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mi-proyecto';
  laboratorios = [
    { id: 'labA', nombre: 'Laboratorio A' },
    { id: 'labB', nombre: 'Laboratorio B' },
    { id: 'labC', nombre: 'Laboratorio C' },
  ];
  reservas = [
    {
      idLaboratorio: 'labA',
      dia: 'Lunes',
      hora_inicio: '08:30',
      hora_fin: '10:00',
      fecha: 'Lunes',
      tipo: 'clase',
    },
    {
      idLaboratorio: 'labB',
      dia: 'Martes',
      hora_inicio: '10:00',
      hora_fin: '11:30',
      fecha: 'Martes',
      tipo: 'practica',
    },
    {
      idLaboratorio: 'labA',
      dia: 'Miércoles',
      hora_inicio: '13:00',
      hora_fin: '14:30',
      fecha: 'Miércoles',
      tipo: 'examen',
    },
    {
      idLaboratorio: 'labB',
      dia: 'Jueves',
      hora_inicio: '16:00',
      hora_fin: '17:30',
      fecha: 'Jueves',
      tipo: 'clase',
    },
    {
      idLaboratorio: 'labA',
      dia: 'Viernes',
      hora_inicio: '19:00',
      hora_fin: '20:30',
      fecha: 'Viernes',
      tipo: 'practica',
    },
  ];
  laboratorioSeleccionado = 'labA';

  onLabSeleccionado(labId: string) {
    this.laboratorioSeleccionado = labId;
    console.log('Laboratorio seleccionado:', labId);
  }

  onOpcionSeleccionada(opcion: string) {
    console.log('Opción seleccionada:', opcion);
    // Aquí puedes implementar lógica adicional según la opción seleccionada
  }
}
