import { Injectable } from '@angular/core';
import * as mercadopago from 'mercadopago';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  private publicKey = 'TEST-d2139a5c-d624-47ce-aad1-b00ebe8d5964';
  private accessToken = 'TEST-5747531730451898-022318-b4cb65d63e36a76a59cf8d92f2be11e5-267157970';

  constructor() {
    mercadopago.configure({
      sandbox: true,
      access_token: this.accessToken
    });
  }

  createPayment(data: any) {
    return mercadopago.payment.save(data);
  }

  getPayment(paymentId: number) {
    return mercadopago.payment.get(paymentId);
  }
}
