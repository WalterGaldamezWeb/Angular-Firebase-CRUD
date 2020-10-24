import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:ProductoModel [];
  cargando:boolean = false;
  noExiste:boolean;

  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos () {
    this.cargando = true;
    this.servicio.obtenerTodosProductos().subscribe(
      (res:any) => {
        if ( res > 0) {
          this.noExiste = false
        }
        this.productos = res;
        this.cargando = false;
      }
    );
  }

}
