import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {
  id: string;
  producto: Producto;
  showPrecioUpdateInput: boolean = false;


  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProducto(this.id).subscribe(producto => {
      this.producto = producto;
      console.log(this.producto)
    });
  }

  onClickDelete(){
    if(confirm("Seguro que desea eliminar este producto?")){
      this.productoService.eliminarProducto(this.id);
      this.router.navigate(['']);
    }
  }

}
