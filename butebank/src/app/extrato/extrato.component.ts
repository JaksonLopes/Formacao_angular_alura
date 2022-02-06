import { Component, Input, OnInit } from '@angular/core';
import { TranferenciaService } from '../services/tranferencia.service';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

 transferencias: any[];
  constructor( private service: TranferenciaService) { }

  ngOnInit() {
   this.transferencias =  this.service.transferencia;
  }

}
