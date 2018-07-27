import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private listaAlunos: any[]= [
    {id:1, nome:'Thiago Costa', email:'thiagocosta@gmail.com'},
    {id:2, nome:'Sandra Maria', email:'sandra@gmail.com'},
    {id:3, nome:'Mel Lais Parlote', email:'mel@gmail.com'},
    {id:4, nome:'Pedro Jorge Parlote', email:'pjparlote@gmail.com'},
    {id:5, nome:'Lili Gonçalves', email:'lgoncalves@gmail.com'},
  ]

  constructor() { }

  OnInit(){
    
  }

  getListaAlunos(){
    return this.listaAlunos;
  }

  getAluno(id:number){
      return this.listaAlunos[--id];
  }

  setAluno(aluno: any){
    let idN = aluno.id;
    let nomeN= aluno.nome;
    let emailN= aluno.email;

    if(aluno.id!=null){
      this.listaAlunos.splice(--idN,1,{id:idN, nome:nomeN, email:emailN});
    }else{
      this.listaAlunos.push({id:this.getListaAlunos().length, nome:nomeN, email:emailN});
    }
  }
  
}
