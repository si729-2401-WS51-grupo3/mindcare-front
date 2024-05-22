export class CitaEntity {
  id: number;
  name: string;
  date: string;
  hour: string;
  status: string;
  patient_name:string;
  type_office: string;
  constructor() {
    this.id=0;
    this.name='';
    this.date='';
    this.hour='';
    this.status='';
    this.patient_name='';
    this.type_office='';
  }
}
