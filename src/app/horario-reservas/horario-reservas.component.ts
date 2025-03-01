import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class HorarioReservasComponent implements OnInit, OnChanges {
  @Input() dataset: ReservaEntrada[] = [];
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
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataset'] || changes['idLaboratorio']) {
      this.procesarDatos();
    }
  }

  private procesarDatos(): void {
    if (!this.dataset || !this.idLaboratorio) {
      return;
    }
    
    console.log('Procesando datos para laboratorio:', this.idLaboratorio);
    console.log('Dataset:', this.dataset);
    
    const reservasFiltradas = this.dataset.filter(reserva => reserva.idLaboratorio === this.idLaboratorio);
    console.log('Reservas filtradas:', reservasFiltradas);

    this.reservas = reservasFiltradas.map(reserva => {
      return {
        dia: reserva.fecha,
        horaInicio: reserva.hora_inicio,
        horaFin: reserva.hora_fin,
        tipo: reserva.tipo
      };
    });
    
    console.log('Reservas procesadas:', this.reservas);
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
