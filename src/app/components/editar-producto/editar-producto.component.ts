import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id: string;
  producto: Producto ={
    nombre: '',
    categoria: '',
    tipo: '',
    descripcion: '',
    precio: 0
  }

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.producto.getProducto(this.id).subscribe( producto => {
      this.producto = producto;
    })
  }

  onSubmit({value, valid}:{value: Producto, valid: boolean}){
    if(!valid){
     this.router.navigate(['']);
    }
    else{
      // editar producto
      this.productoService.editarProducto(this.id,value);
      this.router.navigate(['/producto/'+this.id]);
    }
  }
}
}