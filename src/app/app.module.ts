import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { TareasComponent } from './tareas/tareas.component';
import { ComponentHostbindingComponent } from './component-hostbinding/component-hostbinding.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    TareasComponent,
    ComponentHostbindingComponent,
    MiComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
