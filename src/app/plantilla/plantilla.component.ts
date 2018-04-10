import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  public titulo: string;
  public administrador: boolean;

  constructor() {
    this.titulo = "Plantillas ngTemplate en angular"
    this.administrador = true;
  }

  ngOnInit() {
  }

  cambiar() {
    this.administrador = !this.administrador;
  }
}
