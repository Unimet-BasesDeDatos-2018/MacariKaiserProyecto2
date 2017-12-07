import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { Router } from '@angular/router'
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto ={
    nombre: '',
    categoria: '',
    tipo: '',
    descripcion: '',
    precio: 0
  }

  constructor(
    private router: Router, 
    private productoService: ProductoService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value: Producto, valid: boolean}){
    if(!valid){
     this.router.navigate(['']);
    }
    else{
      // agregar producto
      this.productoService.newProducto(value);
      this.router.navigate(['']);
    }
  }

}
