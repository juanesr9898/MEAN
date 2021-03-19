import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForms: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.productoForms = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required, Validators.min(50)]
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForms);
    const PRODUCTO: Producto = {
      nombre: this.productoForms.get("producto")?.value,
      categoria: this.productoForms.get("categoria")?.value,
      ubicacion: this.productoForms.get("ubicacion")?.value,
      precio: this.productoForms.get("precio")?.value,
    }
    console.log(PRODUCTO);
    this.toastr.success('El producto se registró con éxito', 'Producto registrado');
    this.router.navigate(["/"]);
  }

}
