export class Psicologo {
  id: number;
  name:string;
  birth_date:string;
  gender:string;
  email:string;
  phone:string;
  photoUrl: string;
  occupation:string;
  description:string;
  scheduleId:number;
  constructor() {
    this.id=0;
    this.name='';
    this.birth_date='';
    this.gender='';
    this.email='';
    this.phone='';
    this.photoUrl='';
    this.occupation='';
    this.description='';
    this.scheduleId=0;
  }
}
