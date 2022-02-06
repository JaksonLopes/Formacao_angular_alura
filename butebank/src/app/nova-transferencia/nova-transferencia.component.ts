import { Transferencia } from './../models/tranferencias.model';
import { HttpClient } from '@angular/common/http';
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
  constructor(private serveice: TranferenciaService) { }

  ngOnInit() {
  }
  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.serveice.adiciona(valorEmitir)
      .subscribe(resualtado => {
        console.log(resualtado);
        this.limparCampos;
      },
      (error)=> console.error(error)
      );
  }
  limparCampos() {
    this.valor = 0
    this.destino = 0
  }

}
