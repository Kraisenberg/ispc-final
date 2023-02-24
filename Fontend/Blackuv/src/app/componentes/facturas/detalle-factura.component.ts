import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { Factura } from 'src/app/class/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { MercadoPagoService } from 'src/app/services/mercadopago.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})


export class DetalleFacturaComponent implements OnInit {

  factura: Factura = new Factura;
  totalFactura: number = 0.00;
  detalleFactura: string = '';
  titulo: string = "Factura";

  public payPalConfig?: IPayPalConfig;

  constructor(
    private facturaService: FacturaService, 
    private activatedRoute: ActivatedRoute,
    //private mercadoPagoService: MercadoPagoService
    
    ) { }

  ngOnInit(): void {

    
    this.activatedRoute.paramMap.subscribe(params =>{
      let id = Number(params.get('id'));
      this.facturaService.getFactura(id).subscribe(factura => {
        this.factura = factura;
        this.totalFactura = factura.total;
        this.detalleFactura = factura.descripcion;
        this.initConfig();
      })

    })
    
  }


  private initConfig(): void {

    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AZtVTJxSWkOf6ac6l5P0W3vvDcgSTu5rhyx4GJ-awdB-xBXSiinkJhFXSRpCEui2R9GgmN1ls3PMAqtL',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: this.totalFactura.toString(),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.totalFactura.toString(),
              }
            }
          },
          items: [{
            name: this.detalleFactura,
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: this.totalFactura.toString(),
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);


      },
      onError: err => {
        console.log('OnError', err);

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      },
    };
  }

  










}
