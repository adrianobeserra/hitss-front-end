import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MobileRestService } from './app.mobile-rest.service';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule , MatTableModule} from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { DetailMobileComponent } from './detail-mobile/detail-mobile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    DetailMobileComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, MatTableModule, AngularFontAwesomeModule
  ],
  providers: [MobileRestService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
