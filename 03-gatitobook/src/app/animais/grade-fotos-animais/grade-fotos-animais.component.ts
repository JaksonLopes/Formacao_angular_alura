import { Animais } from '../animais';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css']
})
export class GradeFotosAnimaisComponent implements OnInit {

  @Input()
  animais !: Animais

  existeAnimal : boolean = false
  constructor() { }

  existeAnimais(){
    debugger
    if(this.animais.length > 0){
      return this.existeAnimal = true
    }else{
      return this.existeAnimal = false
    }
  }

  ngOnInit(): void {
  }

}
