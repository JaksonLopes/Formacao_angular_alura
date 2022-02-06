import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TranferenciaService } from '../services/tranferencia.service';


@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  constructor() { }

  ngOnInit() {
  }
  transferir(){
    console.log("boa, vc clicou")
    this.aoTranferir.emit({valor: this.valor, destino: this.destino})
    this.limparCampos()
  }
  limparCampos(){
    this.valor=0
    this.destino=0
  }

}
