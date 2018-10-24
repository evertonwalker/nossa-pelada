import { Component, OnInit } from '@angular/core';
import { Jogador } from '../models/jogador.model';
import { JogadorService } from '../jogador.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css'],
  providers: [ JogadorService ]
})
export class PartidaComponent implements OnInit {

  jogadores: Jogador[];
  jogadoresSelecionados: Jogador[];

  constructor(private jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogadorService.listarJogadores()
      .subscribe( resultado => {
        this.jogadores = resultado;
      }, error => console.log(error));
  }

}
