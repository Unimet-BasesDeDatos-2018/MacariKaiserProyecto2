import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[];
  precioPromedio: number;

  constructor(private productoService: ProductoService) { 

  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
      this.getPrecioPromedio();
    });
  }

  getPrecioPromedio(){
    let total = 0;
    for(let i=0; i<this.productos.length;i++){
      total += parseFloat(this.productos[i].precio);
    }
    this.precioPromedio = total/this.productos.length;
  }

}
