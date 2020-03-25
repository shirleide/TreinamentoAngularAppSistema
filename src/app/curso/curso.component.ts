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
  
  selecionado: Curso;

  constructor(
    private router: Router,
    private cursoServico: CursoService
  ) { }

  ngOnInit(): void {
    this.pesquisar()
  }


  pesquisar() {

    this.cursoServico.pesquisar(this.curso.nome).subscribe(
      retorno => {
        this.listaCurso = <Curso[]>retorno;
      }
    );
  }
  
  selecionar(valor){
    this.selecionado = valor;    
  }
  
  incluir(){
    this.router.navigate(['/curso/incluir']);
  }
  
  alterar(){    
    this.router.navigate(['/curso/alterar/'+this.selecionado.nome]);
  }

  
  remover(){
    this.cursoServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }
}
