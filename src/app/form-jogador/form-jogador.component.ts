import { Component, OnInit } from '@angular/core';
import { Jogador } from '../models/jogador.model';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})
export class FormJogadorComponent implements OnInit {

  jogador: Jogador = new Jogador();

  constructor() { }

  ngOnInit() {
  }

  salvarOuAtualizarJogador(form) {
    console.log(this.jogador);
  }

}
