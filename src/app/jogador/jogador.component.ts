import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { Jogador } from '../models/jogador.model';
import { JogadorService } from '../jogador.service';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.css']
})
export class JogadorComponent implements OnInit {

  dataSource: MatTableDataSource<Jogador>;
  listJogadores: Jogador[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['nome', 'idade', 'telefone', 'acoes'];

  constructor(private jogadorService: JogadorService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.jogadorService.listarJogadores()
      .subscribe(result => {
        this.listJogadores = result;
        this.dataSource.data = result;
        console.log(result);
      }, error => console.log(error));

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteJogador(cpf: number) {
    this.jogadorService.deletarJogador(cpf)
      .subscribe(result => {
        this.snackBar.open(result.message, 'Fechar', {
          duration: 3000
        });
        this.listJogadores = this.listJogadores.filter(j => +j.cpf !== cpf);
        this.dataSource.data = this.listJogadores;
      }, error => {
        this.snackBar.open("Ocorreu um erro ao tentar apagar o jogador, contate o suporte", 'Fechar', {
          duration: 3000
        });
        console.log(error);
      })
  }

}
