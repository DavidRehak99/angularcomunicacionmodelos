import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListasProductosComponent } from './components/listas-productos-component/listas-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"listaproductos", component: ListasProductosComponent},
  {path:"padreCoches", component: PadreCochesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
