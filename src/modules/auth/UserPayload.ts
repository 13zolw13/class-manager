export class UserPayload {
  constructor(
    private role: string,
    private username: string,
    private id: string,
  ) {}

  get getRole() {
    return this.role;
  }
}
