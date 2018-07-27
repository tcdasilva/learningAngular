import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pagina: number;

//  inscricao: Subscription;
  constructor(
        private cursosServices: CursosService,
        private route: ActivatedRoute,
        private router: Router
      ) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: any)=>{
        this.pagina = queryParams['pagina'];
      }
    );
    this.cursos = this.cursosServices.getCursos(0,2);

  }

onNextPage(){
  this.router.navigate(['cursos'],
      {queryParams: {'pagina': ++this.pagina}});

  let inicio: number = ((this.pagina*2)-2);
  let fim: number = this.pagina*2;
  this.cursos = this.cursosServices.getCursos(inicio, fim);
}

onPrevioPage(){
  this.router.navigate
      (['cursos'],
          {
            queryParams: {'pagina': --this.pagina}
          }
      );

  let inicio: number = ((this.pagina*2)-2);
  let fim: number = this.pagina*2;
  this.cursos = this.cursosServices.getCursos(inicio, fim);
}

};
