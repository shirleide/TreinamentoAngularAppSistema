import { Component, OnInit } from '@angular/core';
import { Curso } from './servico/curso';
import { CursoService } from './servico/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();

  listaCurso: Curso[] = [];
  
  constructor(
    private router: Router,
    private cursoServico: CursoService
  ) { }

  ngOnInit(): void {
  }


  pesquisar() {

    this.cursoServico.pesquisar(this.curso.nome).subscribe(
      retorno => {
        // console.log(retorno);
        this.listaCurso = <Curso[]>retorno;
        // this.listaCurso = retorno;
      }
    );
  }

  incluir(){
    this.router.navigate(['/curso/incluir']);
  }


}
