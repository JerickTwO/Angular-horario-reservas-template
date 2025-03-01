
export interface ReservaEntrada {
  idLaboratorio: string;
  dia: string; // "Lunes"
  hora_inicio: string; // "08:00"
  hora_fin: string; // "09:30"
  fecha: string; // "2025-03-01"
  tipo: string; // "normal" o "especial"
}

export interface FranjaHoraria {
  inicio: string; // "08:00"
  fin: string; // "09:00"
}

export interface Reserva {
  dia: string; // "2025-03-01"
  horaInicio: string; // "08:00"
  horaFin: string; // "09:30"
  tipo: string;
}
