import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from "./coche/coche.component";
import { PlantillaComponent } from "./plantilla/plantilla.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:page', component: ContactoComponent },
  { path: 'coche', component: CocheComponent },
  { path: 'plantilla', component: PlantillaComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}