import { Component, OnInit } from '@angular/core';
import { Curso } from './servico/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();

  constructor() { }

  ngOnInit(): void {
  }

  alert(){
    alert(this.curso.nome);
  }

}
