import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../modelos/producto.model';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = "https://angular-crud-65bbf.firebaseio.com"

  constructor(private http:HttpClient) { }

  obtenerTodosProductos () {
    return this.http.get(`${ this.url }/productos.json`)
      .pipe(
        map( res => this.convertirObjeto(res)),delay(500)
      )
  }

  convertirObjeto (productoObjeto:object) {

    const productos:ProductoModel [] = [];

    Object.keys(productoObjeto).forEach( key => {

      const producto:ProductoModel = productoObjeto[key];
      producto.id = key;
      productos.push(producto);

    });
    return productos;
  }

  obtenerProductoId (id:string) {
    return this.http.get(`${ this.url }/productos/${id}.json`);
  }

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

  eliminarProducto (producto:ProductoModel) {
    return this.http.delete(`${ this.url }/productos/${producto.id}.json`);
  }

}
