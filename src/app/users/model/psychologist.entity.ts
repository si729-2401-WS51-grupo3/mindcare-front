export class PatientEntity {
  ID_Psychologist: number;
  Name:string;
  LastName:string;
  photo: string;

  constructor() {
    this.ID_Psychologist=0;
    this.Name='';
    this.LastName='';
    this.photo='';
  }
}
