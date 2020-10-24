import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';


const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/productos'
  },
  {
    path: '/productos',
    component: ProductosComponent
  },
  {
    path: '/producto/:id',
    component: ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
