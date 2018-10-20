import { Component, OnInit } from '@angular/core';
import { Jogador } from '../models/jogador.model';
import { JogadorService } from '../jogador.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css'],
  providers: [JogadorService]
})
export class FormJogadorComponent implements OnInit {

  jogador: Jogador = new Jogador();

  constructor(private jogadorService: JogadorService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  salvarOuAtualizarJogador(form) {
    this.jogadorService.cadastrarJogador(this.jogador)
      .subscribe(result => {
          this.snackBar.open(result.message, 'Fechar', {
            duration: 3000
          });
          form.reset();
      }, error => { 
        this.snackBar.open('Ocorreu um erro ao tentar inserir o jogador, contate o suporte.', 'Fechar', {
          duration: 3000
        });
        console.log(error);
      });
  }

}
