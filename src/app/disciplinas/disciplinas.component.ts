import { Component, OnInit, TemplateRef } from '@angular/core';
import { Disciplina} from '../models/Disciplina'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  public modalRef: BsModalRef;
  public disciplinaForm: FormGroup;
  public titulo = 'Disciplinas';
  public disciplinaSelecionado: Disciplina;
  public textSimple: string;

  public disciplinas = [
    { id:1, nome:'Matematica',tutor: 'Joao'} ,
    { id:2, nome:'Portugues',tutor: 'Lucas'} ,
    { id:3, nome:'Filosofia',tutor: 'Phill'} ,
    { id:4, nome:'Historia',tutor: 'Jose'} ,
    { id:5, nome:'Geografia',tutor: 'Jorge'} ,
    { id:6, nome:'Geometria',tutor: 'Gleyson'} ,

  ];

  /*public professores = [
    'marta',
    'joana'
  ]*/


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
    this.disciplinaForm = this.fb.group({
      id:['', Validators.required],
      nome:['', Validators.required],
      tutor:['', Validators.required]
    });
  }
  disciplinaSubmit(){
    console.log(this.disciplinaForm.value);
  }
  disciplinaSelected(disciplina:Disciplina){
    this.disciplinaSelecionado = disciplina;
    this.disciplinaForm.patchValue(disciplina);
  }
  voltar(){
    this.disciplinaSelecionado=null;
  }


}
