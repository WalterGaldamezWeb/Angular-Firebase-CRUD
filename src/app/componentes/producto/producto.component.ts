import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from '../../modelos/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:ProductoModel = new ProductoModel();
  formInvalido:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  guardar(form:NgForm){
    if (form.invalid) {
      console.log('formulario no valido');
      this.formInvalido = true;
      return;
    }
    this.formInvalido = false;
    console.log(form);
    console.log(this.producto);
  }

}
