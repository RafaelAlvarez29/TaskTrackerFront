import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto lo hace disponible en toda la aplicación
})
export class AuthService {
  getFirstUser() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/user/login';

  constructor(private http: HttpClient) {}

  login(usuario: string, contraseña: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, { usuario, contraseña });
  }




}
