import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  id:number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alunosService: AlunosService    
            ) { }


  ngOnInit( ) {
    this.route.params.subscribe(
      (params)=>{
        this.id = params['id'];
      }
    )

    this.aluno = this.alunosService.getAluno(this.id);
  }

  salvarAluno(){
    this.alunosService.setAluno(this.aluno);
    //this.aluno=null;
    this.router.navigate(['/alunos']);

  }
}
