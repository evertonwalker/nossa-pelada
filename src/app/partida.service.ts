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

}
