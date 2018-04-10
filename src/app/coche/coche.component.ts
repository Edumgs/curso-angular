import { Component, OnInit } from '@angular/core';
import { Coche } from "./coche.module";

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  public coche: Coche;
  public coches: Array<Coche>;

  constructor() {
    this.coche = new Coche("", "", "");
    this.coches = [
      new Coche("Nissan", "1800", "Gris"),
      new Coche("Volkswagen", "1500", "Plata"),
      new Coche("Kia", "2000", "Negro")
    ]
  }

  ngOnInit() {
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
  }

}
