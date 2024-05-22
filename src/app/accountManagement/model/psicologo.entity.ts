export class PsicologoEntity {
  id: number;
  name:string;
  birth_date:string;
  gender:string;
  email:string;
  phone:string;
  occupation:string;
  description:string;
  constructor() {
    this.id=0;
    this.name='';
    this.birth_date='';
    this.gender='';
    this.email='';
    this.phone='';
    this.occupation='';
    this.description='';
  }
}
