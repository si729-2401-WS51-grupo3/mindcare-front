export class AppointmentEntity {
  id: number;
  title:string;
  description:string;
  date:string;
  type: string;
  hour: string;
  patientId: number;
  psychologistId: number;
  constructor() {
    this.id=0;
    this.title='';
    this.description='';
    this.date='';
    this.type='';
    this.hour='';
    this.patientId=0;
    this.psychologistId=0
  }
}
