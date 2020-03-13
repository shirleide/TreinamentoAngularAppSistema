import { Component, OnInit } from '@angular/core';
import { Curso } from '../servico/curso';
import { CursoService } from '../servico/curso.service';


@Component({
  selector: 'app-cursomanter',
  templateUrl: './cursomanter.component.html',
  styleUrls: ['./cursomanter.component.css']
})
export class CursomanterComponent implements OnInit {

  curso: Curso = new Curso()

  constructor(
    private cursoService: CursoService
  ) { }
  ngOnInit(): void {
  }


  incluir() {
    this.cursoService.incluir(this.curso).subscribe(
      retorno => {
        console.log(retorno)
        alert(retorno['mensagem']);
      }
    );
  }


  voltar() {

  }
}
