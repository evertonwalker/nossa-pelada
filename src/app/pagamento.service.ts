import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseHttp } from './models/response.http.model';
import { Pagamento } from './models/pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient) {
  }

  inserirPagamento(pagamento: Pagamento): Observable<ResponseHttp> {
    return this.http.post<ResponseHttp>('api/pagamento', {
      cpf: pagamento.jogador.cpf,
      data: pagamento.dataPagamento,
      valor: pagamento.valor
    });
  }
}
