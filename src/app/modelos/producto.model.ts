export class ProductoModel {
  id:string;
  nombre:string;
  precio:string;
  disponible:boolean;

  constructor(){
    this.disponible = true;
  }
}
