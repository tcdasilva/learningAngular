import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;

  constructor(
        private route:ActivatedRoute,
        private alunosService: AlunosService,
        private router: Router
      ) {
          
      }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any)=>{
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
        console.log("id componente "+id);
      }
    )
  }

  editarAluno(){
      this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
