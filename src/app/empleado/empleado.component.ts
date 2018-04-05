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

  constructor() {
    this.empleado = new Empleado('Eduardo', 25, 'Programador', true);
    this.trabajadores = [
      new Empleado('Manolo Martinez', 35, 'Administrativo', true),
      new Empleado('Ana Lopez', 26, 'Analista', true),
      new Empleado('Juan Perez', 30, 'Cocinero', true)
    ];
  }

  ngOnInit() { 
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

}
