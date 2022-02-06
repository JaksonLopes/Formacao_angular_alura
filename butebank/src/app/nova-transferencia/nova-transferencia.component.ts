import { Transferencia } from './../models/tranferencias.model';
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

  valor: number = 0;
  destino: number = 0;
  constructor(private serveice: TranferenciaService) { }

  ngOnInit() {
  }
  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    if (this.valor >= 5 && this.destino >= 5) {
      this.serveice.adiciona(valorEmitir)
        .subscribe(resualtado => {
          console.log(resualtado);
          this.limparCampos;
        },
          (error) => console.error(error)
        );

    }else{
      alert("valor minimo para transferencia é 5")
     
    }

  }
  limparCampos() {
    this.valor = 0
    this.destino = 0
  }

}
