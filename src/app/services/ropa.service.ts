import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

  public nombre_prenda: string;
  public coleccion_ropa: Array<string>;

  constructor() {
    this.nombre_prenda = "Pantalones vaquero";
    this.coleccion_ropa = ['Pantalones blanco', 'Camiseta roja'];
  }

  prueba(nombre_prenda): string {
    return nombre_prenda;
  }

  agregarRopa(nombre_prenda: string) {
    this.coleccion_ropa.push(nombre_prenda);
  }

  eliminarRopa(index: number) {
    this.coleccion_ropa.splice(index, 1);
  }

  listarRopa(): Array<string> {
    return this.coleccion_ropa;
  }

}
