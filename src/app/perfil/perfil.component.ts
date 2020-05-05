import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  titulo = "Perfil";

  public perfil = [
    { nome: 'Minha Conta'},
    { nome: 'Meu Perfil'},
    { nome: 'Meu Registros'},

  ]





  constructor() { }

  ngOnInit() {
  }

}
