import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CasosComponent } from './components/casos/casos.component';
import { SeguimientosComponent } from './components/seguimientos/seguimientos.component';

import {FormsModule} from '@angular/forms';
import { ColectivosComponent } from './components/colectivos/colectivos.component'

@NgModule({
  declarations: [
    AppComponent,
    CasosComponent,
    SeguimientosComponent,
    ColectivosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
