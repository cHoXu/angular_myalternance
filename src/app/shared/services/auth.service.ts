import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  private token!: string | null;

  login(): void {
    this.token = "MyFakeToken";
    localStorage.setItem('authToken', this.token);
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('authToken');
  }

  getToken(): string | null {
    return this.token
  }
}
