import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

private listaCursos: any = [
  {id:1, nome: 'Angular'},
  {id:2, nome: 'PHP'},
  {id:3, nome: 'TypeScript'},
  {id:4, nome: 'Jquery'},
  {id:5, nome: 'Bootstrap'},
  {id:6, nome: 'Java'}
]

  getCursos(inicio:number, fim:number){
      return this.listaCursos.slice(inicio,fim).sort();
  }

  getCurso(valor:number){
    return this.listaCursos[valor];
  }
}
