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
  laboratoriosEjemplo = [
    {
      id: 'lab1',
      nombre: 'Laboratorio A',
    },
    {
      id: 'lab2',
      nombre: 'Laboratorio B',
    },
    {
      id: 'lab3',
      nombre: 'Laboratorio C',
    },
  ];
}
