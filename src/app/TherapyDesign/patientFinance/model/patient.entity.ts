export class Patient {
  id: number;
  name: string;
  age: string;
  email: string;
  dni: number;
  phone: number;
  image: string;
  date: string;
  treatment: string;
  appointment: string;
  time: string;
  doctor: string;
  import: number;
  constructor() {
    this.id = 0;
    this.name = "";
    this.age = "";
    this.email = "";
    this.dni = 0;
    this.phone = 0;
    this.image = "";
    this.date = "";
    this.treatment = "";
    this.appointment = "";
    this.time = "";
    this.doctor = "";
    this.import = 0;
  }

}
