import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.module'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = 'Componente empleado';
  
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;

  constructor() {
    this.empleado = new Empleado('Eduardo Monges', 25, 'Programador', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 26, 'Analista', false),
      new Empleado('Juan Perez', 30, 'Cocinero', true)
    ];
    this.trabajador_externo = false;
    //this.color = 'red';
    //this.color = 'blue';
    //this.color = 'green';
    this.color = 'teal';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit() { 
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor) {
    this.trabajador_externo = valor;
  }

}
