import { Transferencia } from './../models/tranferencias.model';
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
  //tenho que receber o obsevable de tranferencia e fazer subscribe
  ngOnInit() {
   this.service.todas().subscribe((transferencia: Transferencia[])=>{
     this.transferencias = transferencia;
     console.table(this.transferencias);
   })
  }

}
