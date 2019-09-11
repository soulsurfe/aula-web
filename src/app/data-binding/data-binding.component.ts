import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  private texto = 'Texto inicial';
  private urlImagem = 'https://picsum.photos/400/200';
  private valorDigitado: string;
  private nome = 'Rafael';
  private function: number;

  constructor() { }


  ngOnInit() {
  }

  getValor(): number {
    return 1;
  }

  botaoBinding(): void {
    alert('botão clicado');
  }

  onKeyUp(evento): void {
    console.log(evento.target.value);
    this.valorDigitado = evento.target.value;
  }



}
