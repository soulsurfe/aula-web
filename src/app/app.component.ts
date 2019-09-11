import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
   title = 'helloworld';
   private alunoSelecionado;

  private alunos = [
    {
      nome: 'Robinson Crusoe',
      notas: [
        {
          disciplina: 'Banco de dados',
          nota: 8.0
        },
        {
          disciplina: 'Engenharia de sotfware',
          nota: 4.5
        },
        {
          disciplina: 'Dispositivos móveis',
          nota: 7
        },
        {
          disciplina: 'Programação web 2',
          nota: 10.0
        },
        {
          disciplina: 'Estrutura de dados',
          nota: 9.0
        }
      ]
    },
    {
      nome: 'Fabio Coelho',
      notas: [
        {
          disciplina: 'Banco de dados',
          nota: 4.0
        },
        {
          disciplina: 'Engenharia de sotfware',
          nota: 3.5
        },
        {
          disciplina: 'Dispositivos móveis',
          nota: 10.0
        },
        {
          disciplina: 'Programação web 2',
          nota: 7.0
        },
        {
          disciplina: 'Estrutura de dados',
          nota: 8.5
        }
      ]
    },
    {
      nome: 'Guilherme Briggs',
      notas: [
        {
          disciplina: 'Banco de dados',
          nota: 9.0
        },
        {
          disciplina: 'Engenharia de sotfware',
          nota: 6.0
        },
        {
          disciplina: 'Dispositivos móveis',
          nota: 3.0
        },
        {
          disciplina: 'Programação web 2',
          nota: 8.0
        },
        {
          disciplina: 'Estrutura de dados',
          nota: 6.5
        }
      ]
    }
  ];
   receberNota(nota) {
    this.title = `${nota.disciplina} - ${nota.nota}`;
  }
  ngOnInit(): void {
    const fibonacci = [1, 1, 2, 3, 5, 8, 13];
    console.log('FOR');
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < fibonacci.length; index++) {
      console.log(fibonacci[index]);
    }
    console.log(' FOREACH');
    fibonacci.forEach( elemento => {
      console.log(elemento);
    });
  }

  alterarTitulo(novoTitulo: string, complemento?: string) {
    this.title = novoTitulo;
    if (complemento) {
      this.title += ' - ' + complemento;
    }

  }
}
