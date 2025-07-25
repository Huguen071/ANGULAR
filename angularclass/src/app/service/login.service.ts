import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient)

  login(nome: string, senha: string): Observable<Usuario> {
   return this.http.post<Usuario>("http://localhost:3001/login", { nome, senha })
    .pipe(
      tap(
        (user) => {
          sessionStorage.setItem("email", user.email)
        }
      )
    )
  }
}
