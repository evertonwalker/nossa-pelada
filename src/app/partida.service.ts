import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseHttp } from './models/response.http.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  constructor(private http: HttpClient) { }

  criarTimes(timeUm, timeDois): Observable<ResponseHttp> {
    return this.http.post<ResponseHttp>('api/time/', { timeUm, timeDois }, httpOptions);
  }

  pegarIdTime(nomeTime): Observable<any> {
    return this.http.get<any>(`api/time/${nomeTime}`);
  }

  inserirJogadorETime(time): Observable<any> {
    return this.http.post<ResponseHttp>('api/timejogador/', time, httpOptions);
  }

  inserirPartida(timeUm, timeDois): Observable<any> {
    return this.http.post<any>('api/partida/', { timeUm, timeDois }, httpOptions);
  }

  pegarPartida(idTimeUm): Observable<any> {
    return this.http.get<any>(`api/partida/${idTimeUm}`);
  }

  startedPartida(timeUm): Observable<any> {
    return this.http.post<any>(`api/partidastart/`, { timeUm }, httpOptions);
  }

  inserirGol(partida, jogador): Observable<any> {
    return this.http.post<any>(`api/gols/`, { partida, jogador, gol: 1 }, httpOptions);
  }

  finalizarPartida(partida, timeVencedor): Observable<any> {
    return this.http.post<any>(`api/partidaend/`, { partida, timeVencedor }, httpOptions);
  }

  verificarAndamento(): Observable<any> {
    return this.http.get<Observable<any>>(`/api/andamento/`);
  }

  buscarTimes(): Observable<any> {
    return this.http.get<Observable<any>>(`/api/time/`);
  }

  buscarPartidas(): Observable<any> {
    return this.http.get<Observable<any>>(`/api/partida/`);
  }

}
