package com.Blackuva.app.mercadopago.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.resources.payment.Payment;

/*
@RestController
public class PaymentController {
    @PostMapping("/checkout")
    public ResponseEntity<String> checkout(@RequestParam(name = "amount") float amount,
                                           @RequestParam(name = "description") String description) {
        try {
            // Configurar credenciales de MercadoPago
            MercadoPagoConfig.setAccessToken("ACCESS_TOKEN");

            // Crear objeto de pago
            Payment payment = new Payment();
            payment.
            		setTransactionAmount(amount)
                    .setDescription(description)
                    .setPaymentMethodId("visa")
                    .setPayer(new Payer().setEmail("test_user_123456@testuser.com"));

            // Hacer solicitud a MercadoPago
            payment.save();

            return ResponseEntity.ok(payment.getSandboxInitPoint());
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.badRequest().body("Error al procesar el pago");
        }
    }
}
*/