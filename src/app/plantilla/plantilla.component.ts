import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  public titulo: string;
  public administrador: boolean;
  public datos_del_hijo;

  public dato_externo = "Eduardo Monges";
  public identity = {
    id: 1,
    web: 'mysitio.com',
    tematica: 'Desarrollo Web'
  };

  constructor() {
    this.titulo = "Plantillas ngTemplate en angular"
    this.administrador = true;
  }

  ngOnInit() {
  }

  cambiar() {
    this.administrador = !this.administrador;
  }

  recibirDatos(event) {
    console.log(event);
    this.datos_del_hijo = event
  }
}
