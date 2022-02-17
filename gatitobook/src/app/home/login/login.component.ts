import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private service: AutenticacaoService,
    private route: Router) { }

  ngOnInit(): void {
  }
login(){

  this.service.autenticar(this.usuario,this.senha).subscribe(()=>{
    this.route.navigate(['animais'])
  },(error)=>{
    this.route.navigate(['animais'])
  }
  
  )
}
}
