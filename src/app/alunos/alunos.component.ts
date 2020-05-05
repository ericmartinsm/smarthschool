import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

 public alunos = [
    { id:1, nome:'Marta', sobrenome: 'Kent', telefone: '40028922'} ,
    { id:2, nome:'Paula', sobrenome: 'Martins', telefone: '40028922'} ,
    { id:3, nome:'Renan',sobrenome: 'Oliveira', telefone: '40028922'} ,
    { id:4, nome:'Anita', sobrenome: 'Rocha', telefone: '40028922'} ,
    { id:5, nome:'Bruno', sobrenome: 'Pereira', telefone: '40028922'} ,
    { id:6, nome:'Pedro', sobrenome: 'Paulo', telefone: '40028922'} ,

  ];

  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
             private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome:['', Validators.required],
      sobrenome:['', Validators.required],
      telefone:['', Validators.required]
    });
  }
  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelected(aluno:Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }
  voltar(){
    this.alunoSelecionado=null;
  }



}
 