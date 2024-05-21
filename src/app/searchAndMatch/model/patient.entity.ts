export class PatientEntity {
  id: number;
  name:string;
  lastName:string;
  photoUrl: string;
  constructor() {
    this.id=0;
    this.name='';
    this.lastName='';
    this.photoUrl='';
  }
}
