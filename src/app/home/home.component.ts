import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public listado_ropa: Array<string>;
  public prenda_a_guardar: string;
  public fecha;

  constructor(private ropaService: RopaService) {
    this.titulo = "Página Principal";
    this.fecha = new Date(2018,3,9);
  }

  ngOnInit() {
    this.listado_ropa = this.ropaService.listarRopa();
    console.log(this.listado_ropa);
  }

  guardarPrenda() {
    this.ropaService.agregarRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index: number) {
    this.ropaService.eliminarRopa(index);
  }
}
