export class SignUpResponse {
  public id: number;
  public name: string;
  public lastName: string;
  public email: string;

  constructor(id: number, name: string, lastName: string, email: string) {
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.id = id;
  }
}
