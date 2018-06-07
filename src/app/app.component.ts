import { Component, OnInit } from '@angular/core';
import { MobileRestService } from './app.mobile-rest.service';
import { Observable } from 'rxjs/Rx';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { Mobile } from '../models/mobile.model';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Claro Mobile Store';
  dataSource = new MobileDataSource(this.mobileRestService);
  displayedColumns = ['model', 'price', 'code', 'photo', 'date', '#'];
  constructor(private mobileRestService: MobileRestService) { }

  ngOnInit() {
  }

  /* Função Responsável por obter um registro especifico da api através do ServiceMobileRestService */
  getMobile(code) {
    this.mobileRestService.getMobileByCode(code).subscribe(
      data => { this.mobileRestService.selectedMobile = <Mobile>data },
      err => console.error(err),
      () => function () {
        console.log('sucesso ao carregar um mobile');
        this.exibirDetalhe = true;
      }
    );
    this.mobileRestService.exibirDetalhe = true;
  }
}

/* Classe que representa um DataSource para a lista de mobiles obtidos através do Service MobileRestService */
export class MobileDataSource extends DataSource<any> {
  constructor(private mobileRestService: MobileRestService) {
    super();
  }
  connect(): Observable<Mobile[]> {
    console.log("sucesso");
    return this.mobileRestService.getMobiles();
  }
  disconnect() { }
}