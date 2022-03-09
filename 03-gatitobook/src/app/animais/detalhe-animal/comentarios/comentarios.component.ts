import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id !: number
  comentario$!: Observable<Comentarios>
  comentarioForm !: FormGroup

  constructor(
    private comentarioService: ComentariosService,
    private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.comentario$ = this.comentarioService.buscaComentario(this.id);
    this.comentarioForm = this.formBuild.group({
      comentario: ['', Validators.maxLength(300)]
    })
  }
  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentario$ = this.comentarioService.incluiComentario(
      this.id, comentario)
      .pipe(
        switchMap(() => this.comentarioService.buscaComentario(this.id)),
        tap(()=>{
          this.comentarioForm.reset();
          alert('Salco Comentario')
        })
      );
  }

}
