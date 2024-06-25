export class ReservationEntity {
  scheduleId: number;
  patientId: number;
  psychologistId: number;
  reservationHour: number;
  reservationDate: string;
  constructor() {
    this.scheduleId = 0;
    this.patientId = 0;
    this.psychologistId = 0;
    this.reservationHour = 0;
    this.reservationDate = '';
  }
}
