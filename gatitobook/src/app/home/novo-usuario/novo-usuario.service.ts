import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  readonly url='http://localhost:3000/user/signup'
  constructor( private http: HttpClient) { }

  cadastrNovousuario(novoUsuario:NovoUsuario){
    return this.http.post('url',novoUsuario)
  }
}
