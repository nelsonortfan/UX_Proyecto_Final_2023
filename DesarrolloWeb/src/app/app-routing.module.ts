import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaHomeComponent } from './componentes/pagina-home/pagina-home.component';
import { DetalleFechaComponent } from './componentes/detalle-fecha/detalle-fecha.component';

const routes: Routes = [
  {path: 'fecha-detalle', component: DetalleFechaComponent},
  {path: 'home', component: PaginaHomeComponent},
  { path: '**', component: PaginaHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
