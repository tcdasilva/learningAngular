import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';
//import { Subscription } from 'rjsx/Rx';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id:number;
  curso: any;
//  inscricao: Subscription;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) {
  //  this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
     this.route.params.subscribe(
      (params:any)=>{
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id -1);
        if(this.curso == null){
          this.router.navigate(['naoEncontrado'])
        }

      }
    );

  }

}
