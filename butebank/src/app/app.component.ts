import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 transferencias:any;


  title = 'butebank';
  transferir($event){
    this.transferencias = $event;
    console.log($event)
  }
}
