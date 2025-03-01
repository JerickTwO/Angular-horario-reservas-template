import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FranjaHoraria {
  inicio: string;
  fin: string;
}

interface Reserva {
  dia: string;
  horaInicio: string;
  horaFin: string;
  tipo: string;
}

interface ReservaEntrada {
  idLaboratorio: string;
  dia: string;
  hora_inicio: string;
  hora_fin: string;
  fecha: string;
  tipo: string;
}

@Component({
  selector: 'app-horario-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horario-reservas.component.html',
  styleUrl: './horario-reservas.component.css',
})
export class HorarioReservasComponent implements OnInit {
  @Input() dataset: ReservaEntrada[] = [
    { idLaboratorio: 'lab1', dia: 'Lunes', hora_inicio: '08:30', hora_fin: '10:00', fecha: 'Lunes', tipo: 'clase' },
    { idLaboratorio: 'lab1', dia: 'Martes', hora_inicio: '10:00', hora_fin: '11:30', fecha: 'Martes', tipo: 'practica' },
    { idLaboratorio: 'lab2', dia: 'Miércoles', hora_inicio: '13:00', hora_fin: '14:30', fecha: 'Miércoles', tipo: 'examen' },
    { idLaboratorio: 'lab3', dia: 'Jueves', hora_inicio: '16:00', hora_fin: '17:30', fecha: 'Jueves', tipo: 'clase' },
    { idLaboratorio: 'lab2', dia: 'Viernes', hora_inicio: '19:00', hora_fin: '20:30', fecha: 'Viernes', tipo: 'practica' }
  ];
  @Input() idLaboratorio: string = '';

  franjasHorarias: FranjaHoraria[] = [
    { inicio: '07:00', fin: '08:30' },
    { inicio: '08:30', fin: '10:00' },
    { inicio: '10:00', fin: '11:30' },
    { inicio: '11:30', fin: '13:00' },
    { inicio: '13:00', fin: '14:30' },
    { inicio: '14:30', fin: '16:00' },
    { inicio: '16:00', fin: '17:30' },
    { inicio: '17:30', fin: '19:00' },
    { inicio: '19:00', fin: '20:30' },
    { inicio: '20:30', fin: '22:00' }
  ];
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  reservas: Reserva[] = [];

  ngOnInit(): void {
    this.procesarDatos();
  } 

  private procesarDatos(): void {
    const reservasFiltradas = this.dataset.filter(reserva => reserva.idLaboratorio === this.idLaboratorio);

    this.reservas = reservasFiltradas.map(reserva => {
      return {
        dia: reserva.fecha,
        horaInicio: reserva.hora_inicio,
        horaFin: reserva.hora_fin,
        tipo: reserva.tipo
      };
    });
  }

  obtenerReservasParaFranja(dia: string, franja: FranjaHoraria): Reserva | null {
    return this.reservas.find(reserva =>
      reserva.dia === dia && this.estaReservada(franja, reserva)
    ) || null;
  }

  private estaReservada(franja: FranjaHoraria, reserva: Reserva): boolean {
    const inicioFranja = this.convertirAMinutos(franja.inicio);
    const finFranja = this.convertirAMinutos(franja.fin);
    const inicioReserva = this.convertirAMinutos(reserva.horaInicio);
    const finReserva = this.convertirAMinutos(reserva.horaFin);

    return !(finFranja <= inicioReserva || inicioFranja >= finReserva);
  }

  private convertirAMinutos(hora: string): number {
    const [h, m] = hora.split(':').map(Number);
    return h * 60 + m;
  }
}
