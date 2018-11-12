import { Component, OnInit, ViewChild } from '@angular/core';
import { Partida } from '../models/partida.model';
import { PartidaService } from '../partida.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-ver-partida',
  templateUrl: './ver-partida.component.html',
  styleUrls: ['./ver-partida.component.css'],
  providers: [PartidaService]
})
export class VerPartidaComponent implements OnInit {

  times = [];
  partidas = [];
  dataSource: MatTableDataSource<Partida>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id_partida', 'Time vencedor', 'Time um', 'Time dois'];
  constructor(private partidaService: PartidaService) { }

  ngOnInit() {

    this.partidaService.buscarTimes()
      .subscribe(result => {
        this.times = result;

        this.partidaService.buscarPartidas()
          .subscribe(result => {
            this.partidas = result;
            this.partidas = this.partidas.filter( p => p.timeVencedor !== null);
          }, error => console.log(error));


      }, error => console.log(error));
  }


  getNome(id) {
    if (id === 0) {
      return 'Empate';
    } else {
      return this.times.find(t => t.cd_time === id).nome;
    }
  }


}
