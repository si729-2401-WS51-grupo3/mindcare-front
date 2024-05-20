export class Patient {
  id: number;
  name: string;
  lastName: string;
  email: string;
  dni: string;
  phone: string;
  photoUrl: string;
  constructor() {
    this.id = 0;
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.dni = '';
    this.phone = '';
    this.photoUrl = '';
  }
}
