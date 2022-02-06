import { Component } from '@angular/core';
import { TranferenciaService } from './services/tranferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 constructor( private service: TranferenciaService){}

  title = 'butebank';

  transferir($event){
    this.service.adiciona($event);
  }
}
