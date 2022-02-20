import { AnimaisService } from './../animais.service';
import { Animal } from './../animais';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId !: number;
  animal$ !: Observable<Animal>;

  constructor(
    private animaisSerrvice: AnimaisService,
    private activated: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.animalId = this.activated.snapshot.params.animalId;
    this.animal$ = this.animaisSerrvice.buscaPorId(this.animalId);
  }
  curtir(){
    this.animaisSerrvice.curtir(this.animalId).subscribe((curtida)=>{
      if(curtida){
        this.animal$ = this.animaisSerrvice.buscaPorId(this.animalId);
      }
    })
  }

  excluir(){
    this.animaisSerrvice.excluirAnimal(this.animalId).subscribe(()=>{
      this.router.navigate(['/animais/']);
    },(error)=> console.log(error))
  }

}
