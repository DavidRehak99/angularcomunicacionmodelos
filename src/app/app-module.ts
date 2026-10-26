import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListasProductosComponent } from './components/listas-productos-component/listas-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { HijoCochesComponent } from './components/hijo-coches-component/hijo-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { HijoDeportesComponent } from './components/hijo-deportes-component/hijo-deportes-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { HijosNumerosComponent } from './components/hijos-numeros-component/hijos-numeros-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

@NgModule({
  declarations: [
    App,
    ListasProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreCochesComponent,
    HijoCochesComponent,
    PadreDeportesComponent,
    HijoDeportesComponent,
    PadreNumerosComponent,
    HijosNumerosComponent,
    ComicsSimpleComponent,
    ComicsJsonComponent,
    ComicsExcelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
