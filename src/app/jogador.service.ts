import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogador } from './models/jogador.model';
import { ResponseHttp } from './models/response.http.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private http: HttpClient) { }

  cadastrarJogador(jogador: Jogador): Observable<ResponseHttp> {
    return this.http.post<ResponseHttp>('api/jogador/', jogador, httpOptions);
  }

  listarJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>('api/jogador');
  }

  deletarJogador(cpf: number): Observable<ResponseHttp> {
    return this.http.delete<ResponseHttp>('api/jogador/' + cpf);
  }

}
