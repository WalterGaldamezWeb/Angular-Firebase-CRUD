import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../modelos/producto.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = "https://angular-crud-65bbf.firebaseio.com"

  constructor(private http:HttpClient) { }

  crearProducto(producto:ProductoModel){
    return this.http.post(`${ this.url }/productos.json`, producto)
      .pipe(
        map( (res:any) => {
          producto.id = res.name;
          return producto;
        })
      )
  }

  actualizarProducto (producto:ProductoModel) {

    const productoTemporal = {
      ...producto
    }

    delete productoTemporal.id;

    return this.http.put(`${ this.url }/productos/${ producto.id}.json`, productoTemporal);
  }

}
