import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/modelos/producto.model';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:ProductoModel [];
  cargando:boolean = false;
  noExiste:boolean;

  constructor(private servicio:ProductosService,
              private router:Router) { }

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

  eliminar (producto:ProductoModel, i:number){



    Swal.fire({
      title: 'Estas Seguro',
      text: `Quieres eliminar el producto ${ producto.nombre }`,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }).then( res => {
      if (res.value == true){
        this.productos.splice(i,1);
        this.servicio.eliminarProducto(producto).subscribe();
      }
    });
  }

}
