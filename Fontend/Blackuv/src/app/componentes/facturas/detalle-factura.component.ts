import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from 'src/app/class/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})


export class DetalleFacturaComponent implements OnInit {

  //mercadopago = require("mercadopago");

  factura!: Factura;
  titulo: string = "Factura";


  constructor(private facturaService: FacturaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params =>{
      let id = Number(params.get('id'));
      this.facturaService.getFactura(id).subscribe(factura => this.factura = factura)
    })

   //this.mercadopago.configure({ access_token: "TEST-5747531730451898-022318-b4cb65d63e36a76a59cf8d92f2be11e5-267157970",});  
  
  }

}
