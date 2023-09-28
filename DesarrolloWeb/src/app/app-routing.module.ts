import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaHomeComponent } from './componentes/pagina-home/pagina-home.component';
import { DetalleFechaComponent } from './componentes/detalle-fecha/detalle-fecha.component';
import { HistoricoResumenComponent } from './componentes/historico-resumen/historico-resumen.component';
import { ParametrosReporteComponent } from './componentes/parametros-reporte/parametros-reporte.component';

const routes: Routes = [
  {path: 'fecha-detalle', component: DetalleFechaComponent},
  {path: 'parametro-reporte', component: ParametrosReporteComponent},
  {path: 'home', component: PaginaHomeComponent},
  { path: 'resumen', component: HistoricoResumenComponent },
  { path: '**', component: PaginaHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
