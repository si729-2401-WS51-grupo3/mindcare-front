export class SignUpProfileRequest {
  public name: string;
  public lastName: string;
  public email: string;
  public password: string;
  public dni: string;
  public phone: string;
  public photoUrl: string;

  constructor(name: string, lastName: string, email: string, password: string, dni: string, phone: string, photoUrl: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.dni = dni;
    this.phone = phone;
    this.photoUrl = photoUrl
  }
}
