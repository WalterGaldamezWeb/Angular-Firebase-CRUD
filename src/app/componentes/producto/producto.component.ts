import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../modelos/producto.model';
import { ProductosService } from '../../servicios/productos.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:ProductoModel = new ProductoModel();
  formInvalido:boolean = false;

  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {

  }

  guardar(form:NgForm){
      if (form.invalid) {
        console.log('formulario no valido');
        this.formInvalido = true;
        return;
      }

      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        icon: 'info',
        allowOutsideClick: false
      });
      Swal.disableButtons();
      Swal.showLoading();

      this.formInvalido = false;
      if(this.producto.id){
        this.servicio.actualizarProducto(this.producto).subscribe(
          res => {
            console.log(res);
            Swal.fire({
              title: this.producto.nombre,
              text: 'Actualizado',
              icon: 'success',
              allowOutsideClick: false
            });
          },
          err => console.error(err)
          )
      }else{
        this.servicio.crearProducto(this.producto).subscribe(
          res => {
            console.log(res);
            Swal.fire({
              title: this.producto.nombre,
              text: 'Guardado Correctamente',
              icon: 'success',
              allowOutsideClick: false
            });
          },
          err => console.error(err)
          )
      }
    }
}
