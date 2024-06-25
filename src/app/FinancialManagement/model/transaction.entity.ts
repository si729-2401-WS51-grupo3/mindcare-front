export class TransactionEntity {
  id: number;
  patientId: string;
  psychologistId: string;
  reservationId: string;
  amount: string;
  constructor() {
    this.id = 0;
    this.patientId = '';
    this.psychologistId = '';
    this.reservationId = '';
    this.amount = '';
  }
}
