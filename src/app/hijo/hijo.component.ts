import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  public titulo: string;
  
  @Input('texto1') propiedad_uno: string;
  @Input('texto2') propiedad_dos: string;

  @Output() desde_el_hijo = new EventEmitter();

  constructor() {
    this.titulo = "Este es el componente hijo"
  }

  ngOnInit() {
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
    this.enviarDatos();
  }

  enviarDatos() {
    this.desde_el_hijo.emit({
      nombre: 'Eduardo Monges',
      web: 'mysitio.com'
    });
  }

}
