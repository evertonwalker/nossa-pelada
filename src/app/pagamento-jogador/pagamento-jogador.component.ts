import { Component, OnInit } from '@angular/core';
import { Pagamento } from '../models/pagamento.model';
import { Jogador } from '../models/jogador.model';
import { JogadorService } from '../jogador.service';

@Component({
  selector: 'app-pagamento-jogador',
  templateUrl: './pagamento-jogador.component.html',
  styleUrls: ['./pagamento-jogador.component.css']
})
export class PagamentoJogadorComponent implements OnInit {

  pagamento: Pagamento = new Pagamento();
  jogadorSelecionado: Jogador;
  jogadores: Jogador[] = [];

  constructor(private jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogadorService.listarJogadores()
      .subscribe(result => {
        this.jogadores = result;
        console.log(result);
      }, error => console.log(error));
  }

}
