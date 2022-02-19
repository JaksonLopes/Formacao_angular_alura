import { Transferencia } from './../models/tranferencias.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {
  private url = "http://localhost:3000/transferencia";

  private listaTranferencia: any[];

  // preciso injetar uma classe httpClient, para consegui trablaha com apis ou json.server
  constructor(private httpClient: HttpClient) {

    this.listaTranferencia = [];

  }
  get transferencia() {
    return this.listaTranferencia;
  }
  //tenho q retorna um Observable<da minha interface json tranferencia[]>
  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  //para realizar o put preciso passar como paramentro a URl e o corpo da requisição
  adiciona(transferencias: Transferencia) : Observable<Transferencia> {
    this.hidrata(transferencias);
    return this.httpClient.post<Transferencia>(this.url, transferencias);
    
  }
  private hidrata(transferencia: any) {
    transferencia.data = new Date();

  }

}
