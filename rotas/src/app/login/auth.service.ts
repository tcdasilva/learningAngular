import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean=false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  verificaLogin(usuario: Usuario){
    if(usuario.nome === "thiago" &&
         usuario.senha=== "19830719"){

        this.usuarioAutenticado=true;
       
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
        
    }else{
      console.log('falhou Autenticacao');
      this.usuarioAutenticado=false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
