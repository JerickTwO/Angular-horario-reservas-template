import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FranjaHoraria {
  inicio: string;
  fin: string;
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
    {
      idLaboratorio: 'lab1',
      dia: '2023-10-01',
      hora_inicio: '08:00',
      hora_fin: '10:00',
      fecha: '2023-10-01',
      tipo: 'Clase',
    },
    {
      idLaboratorio: 'lab1',
      dia: '2023-10-01',
      hora_inicio: '10:00',
      hora_fin: '12:00',
      fecha: '2023-10-01',
      tipo: 'Reunión',
    },
    {
      idLaboratorio: 'lab4',
      dia: '2023-10-02',
      hora_inicio: '12:00',
      hora_fin: '14:00',
      fecha: '2023-10-02',
      tipo: 'REu',
    },
  ];
  @Input() idLaboratorio = 'lab4';

  franjasHorarias: FranjaHoraria[] = [
    { inicio: '08:00', fin: '10:00' },
    { inicio: '10:00', fin: '12:00' },
    { inicio: '12:00', fin: '14:00' },
    { inicio: '14:00', fin: '16:00' },
    { inicio: '16:00', fin: '18:00' },
  ];

  dias: string[] = ['2023-10-01', '2023-10-02', '2023-10-03'];

  reservas: Reserva[] = [];

  ngOnInit(): void {
    this.procesarDatos();
  }

  private procesarDatos(): void {
    const reservasFiltradas = this.dataset.filter(
      (reserva) => reserva.idLaboratorio === this.idLaboratorio
    );

    this.reservas = reservasFiltradas.map((reserva) => {
      return {
        dia: reserva.fecha,
        horaInicio: reserva.hora_inicio,
        horaFin: reserva.hora_fin,
        tipo: reserva.tipo,
      };
    });
  }

  obtenerReservasParaFranja(
    dia: string,
    franja: FranjaHoraria
  ): ReservaEntrada | null {
    return (
      this.reservas.find(
        (reserva) => reserva.dia === dia && this.estaReservada(franja, reserva)
      ) || null
    );
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
