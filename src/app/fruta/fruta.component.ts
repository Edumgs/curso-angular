import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  nombre_componente = 'Componente de fruta';
  listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  nombre: string;
  edad: number;
  mayorDeEdad: boolean;
  trabajos: Array<string>;
  comodin: any;

  constructor() {
    this.nombre = 'Eduardo Monges';
    this.edad = 25;
    this.mayorDeEdad = true;
    this.trabajos = ['Electricista', 'Programador', 'Carpintero'];
    this.comodin = 'SI';
  }

  ngOnInit() {
    this.cambiarNombre('Juan Perez');
  }

  holaMundo(nombre) {
    alert('Nombre: ' + nombre);
  }

  cambiarNombre(nombre) {
    this.nombre = nombre;
  }

  cambiarEdad(edad) {
    this.edad = edad;
  }
}
