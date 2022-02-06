import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listaTranferencia: any[];


constructor() {
  this.listaTranferencia = [];

}
 get transferencia(){
   return this.listaTranferencia;
 }
 adiciona(transferencias: any){
  this.hidrata(transferencias);
  this.transferencia.push(transferencias);
}
 private hidrata(transferencia:any){
  transferencia.data = new Date();

 }

}
