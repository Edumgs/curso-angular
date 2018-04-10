import { Component, OnInit} from '@angular/core';
import { Coche } from "./coche.module";
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  providers: [PeticionesService]
})
export class CocheComponent implements OnInit {

  public coche: Coche;
  public coches: Array<Coche>;
  public articulos: any;

  constructor(private peticiones: PeticionesService) {
    this.coche = new Coche("", "", "");
    this.coches = [
      new Coche("Nissan", "1800", "Gris"),
      new Coche("Volkswagen", "1500", "Plata"),
      new Coche("Kia", "2000", "Negro")
    ]
  }

  ngOnInit() {
    this.peticiones.getArticulos().subscribe(
      result => {
        this.articulos = result;

        if (!this.articulos) {
          console.log("Error en el servidor");
        }
      },
      error => {
        let errorMessage = <any> error;
        console.log(errorMessage);
      }
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
  }

}
