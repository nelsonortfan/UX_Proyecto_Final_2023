import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaHomeComponent } from './componentes/pagina-home/pagina-home.component';

import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { DetalleFechaComponent } from './componentes/detalle-fecha/detalle-fecha.component';
import { HistoricoResumenComponent } from './componentes/historico-resumen/historico-resumen.component';
import { MatIconModule } from '@angular/material/icon';
import { MensajeBorrarComponent } from './componentes/mensaje-borrar/mensaje-borrar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ParametrosReporteComponent } from './componentes/parametros-reporte/parametros-reporte.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaHomeComponent,
    DetalleFechaComponent,
    HistoricoResumenComponent,
    MensajeBorrarComponent,
    ParametrosReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
