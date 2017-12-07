import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/Producto';


@Injectable()
export class ProductoService {
  productosRef: AngularFireList<any>;
  productos: Observable<any[]>;
  producto: Observable<any>;

  constructor(private db: AngularFireDatabase) { 
    this.productosRef = this.db.list('productos');
    this.productos = this.productosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  getProductos(){
    return this.productos;
  }

  newProducto(producto: Producto){
    this.productosRef.push(producto);
  }

  getProducto(id: string){
    this.producto = this.db.object('/productos/'+id).valueChanges();
    return this.producto;
  }

  editarProducto(id: string, producto:Producto){
    return this.productosRef.update(id, producto);
  }

  eliminarProducto(id: string, producto: Producto){
    return this.productosRef.remove(id);
  }

}
