import { Component, OnInit } from '@angular/core';
import { Pagamento } from '../models/pagamento.model';
import { Jogador } from '../models/jogador.model';
import { JogadorService } from '../jogador.service';
import { PagamentoService } from '../pagamento.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pagamento-jogador',
  templateUrl: './pagamento-jogador.component.html',
  styleUrls: ['./pagamento-jogador.component.css']
})
export class PagamentoJogadorComponent implements OnInit {

  pagamento: Pagamento = new Pagamento();
  jogadores: Jogador[] = [];

  constructor(private jogadorService: JogadorService, private pagamentoService: PagamentoService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let jogador = new Jogador();
    this.pagamento.jogador = jogador;
    this.jogadorService.listarJogadores()
      .subscribe(result => {
        this.jogadores = result;
      }, error => console.log(error));
  }

  salvarPagamento(form) {
    this.pagamentoService.inserirPagamento(this.pagamento)
      .subscribe(result => {
        this.snackBar.open(result.message, 'Fechar', {
          duration: 3000
        });
        if (result.code === 200) {
          form.reset();
        }
      }, error => {
        this.snackBar.open('Ocorreu um erro ao realizar o pagamento do jogador, contate o suporte.', 'Fechar', {
          duration: 3000
        });
      })
  }

}
