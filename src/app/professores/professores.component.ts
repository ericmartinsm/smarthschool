import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public textSimple: string;
  

  

  public professores = [
     {id:1, nome:'Joao', disciplina:'matematica'} ,
     {id:2, nome:'Lucas', disciplina:'portugues'} ,
     {id:3, nome:'Phill', disciplina:'filosofia'},
     {id:4, nome:'Jose', disciplina:'historia'},
     {id:5, nome:'jorge', disciplina:'geografia'},
     {id:6, nome:'Gleyson', disciplina:'geometria'}
   ];


   
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

constructor(private fb: FormBuilder,
             private modalService: BsModalService) {
    this.criarForm();
}
  ngOnInit() {
  }

   criarForm(){
     this.professorForm = this.fb.group({
       nome:['', Validators.required],
       disciplina:['', Validators.required]
     });
   }

   professorSubmit(){
     console.log(this.professorForm.value);
   }

   professorSelected(professor:Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }
  voltar(){
    this.professorSelecionado=null;
  }

  
}
