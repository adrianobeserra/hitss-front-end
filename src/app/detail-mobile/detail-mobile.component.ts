import { Mobile } from './../../models/mobile.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MobileRestService } from '../app.mobile-rest.service';

@Component({
  selector: 'app-detail-mobile',
  templateUrl: './detail-mobile.component.html',
  styleUrls: ['./detail-mobile.component.css']
})
export class DetailMobileComponent implements OnInit {
  mobile: Mobile = this.mobileRestService.selectedMobile;
  constructor(private mobileRestService: MobileRestService) { }

  ngOnInit() {
  }

  close(){
    this.mobileRestService.exibirDetalhe = false;
  }

}