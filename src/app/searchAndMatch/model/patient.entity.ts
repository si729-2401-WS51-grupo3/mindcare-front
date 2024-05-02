export class PatientEntity {
  ID_Patient: number;
  Name:string;
  LastName:string;
  photo: string;
  constructor() {
    this.ID_Patient=0;
    this.Name='';
    this.LastName='';
    this.photo='';
  }
}
