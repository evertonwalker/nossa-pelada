import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Jogador } from '../models/jogador.model';
import { JogadorService } from '../jogador.service';
import { Time } from '../models/time.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css'],
  providers: [JogadorService]
})
export class PartidaComponent implements OnInit {

  jogadores: Jogador[];
  jogadoresSelecionados: Jogador[] = [];
  timeUm: Time = new Time();
  timeDois: Time = new Time();
  qtdGolTimeUm: number = 0;
  qtdGolTimeDois: number = 0;
  timeTotal: Time = new Time();
  jogadorFezGol: Jogador = new Jogador();
  jogadoresQueFizeramGolTimeUm = [];
  jogadoresQueFizeramGolTimeDois = [];
  fimPartida: false;
  minutes: number;
  seconds: number;
  partidaComecou = false;
  @ViewChild("time", { read: ElementRef }) time: ElementRef;

  constructor(private jogadorService: JogadorService, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.timeUm.jogadores = [];
    this.timeDois.jogadores = [];
    this.timeTotal.jogadores = [];

    this.jogadorService.listarJogadoresPagos()
      .subscribe(resultado => {
        this.jogadores = resultado;
      }, error => console.log(error));
  }

  verificarQuantidadeJogadores() {
    let verify = true;
    if (this.jogadoresSelecionados.length % 2 === 0 && this.jogadoresSelecionados.length > 7) {
      verify = false;
    }
    return verify;
  }

  comecarPartida() {
    this.partidaComecou = true;
    this.startTimer(this.time);
  }

  timeVencedor(){
    return this.qtdGolTimeUm > this.qtdGolTimeDois ? this.timeUm.nome : this.timeDois.nome;
  }



  adicionarGol() {
    let timeUm = false;

    this.timeUm.jogadores.forEach(j => {
      if (j.cpf === this.jogadorFezGol.cpf) {
        timeUm = true;
        ++this.qtdGolTimeUm;
        this.jogadoresQueFizeramGolTimeUm.push({ jogador: j.nome, time: this.time.nativeElement.textContent });
      }
    });

    if (!timeUm) {
      this.timeDois.jogadores.forEach(j => {
        if (j.cpf === this.jogadorFezGol.cpf) {
          ++this.qtdGolTimeDois;
          this.jogadoresQueFizeramGolTimeDois.push({ jogador: j.nome, time: this.time.nativeElement.textContent });
        }
      });
    }
  }


  verificarGol() {
    return this.qtdGolTimeDois > 0 || this.qtdGolTimeUm > 0;
  }

  pickPlayer() {
    let jogador = this.jogadoresSelecionados[Math.floor((Math.random() * this.jogadoresSelecionados.length))];
    this.jogadoresSelecionados = this.jogadoresSelecionados.filter(j => j.cpf !== jogador.cpf);
    this.timeTotal.jogadores.push(jogador);
    return jogador;
  }

  sortearTimes() {

    let metadeDosJogadores = this.jogadoresSelecionados.length / 2;
    let tamanhoTotalInicial = this.jogadoresSelecionados.length;

    for (var i = 0; i < tamanhoTotalInicial; i++) {
      if (metadeDosJogadores <= i) {
        this.timeDois.jogadores[i - metadeDosJogadores] = this.pickPlayer();
      } else {
        this.timeUm.jogadores[i] = this.pickPlayer();
      }

    }
  }

  startTimer(element) {
    var timer: number = 60 * 10, minutes, seconds;

    var contador = setInterval(function () {
      minutes = timer / 60, 10;
      seconds = timer % 60, 10;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.partidaAcabou = false;
    
      if (--timer < 0) {
        alert("A partida acabou, vá para próxima tela.");
        clearInterval(contador);
      }

      element.nativeElement.textContent = `${parseInt(minutes)} : ${parseInt(seconds)}`;

    }, 1000);
  }


  verificarProximoPassoDois() {
    return this.timeUm.nome !== undefined && this.timeDois.nome !== undefined
      && this.timeUm.jogadores.length > 0 && this.timeDois.jogadores.length > 0;
  }

}
