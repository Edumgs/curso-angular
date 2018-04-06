import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo: string;
  public parametro;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.titulo = "Componente contacto";
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
  }

  redirigir() {
    this.router.navigate(['/contacto', 'eduardo']);
  }

}
