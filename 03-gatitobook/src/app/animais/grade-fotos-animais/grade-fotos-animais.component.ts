import { Router } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { Animais, Animal } from '../animais';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css']
})
export class GradeFotosAnimaisComponent implements OnInit {

  @Input()
  animais !: Animais

  @Input()
  animalId !: number;
  animal$ !: Observable<Animal>;


  existeAnimal : boolean = false
  constructor(private animaisSerrvice: AnimaisService, private router: Router ) { }

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
  curtir(id: number){
    debugger
    this.animaisSerrvice.curtir(id).subscribe((curtida)=>{
      if(curtida){
        this.animal$ = this.animaisSerrvice.buscaPorId(id);
        this.router.navigate(['/animais/'])
      }
    })
  }

}
