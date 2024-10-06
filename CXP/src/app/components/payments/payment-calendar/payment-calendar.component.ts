import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-payment-calendar',
  templateUrl: './payment-calendar.component.html',
  styleUrls: ['./payment-calendar.component.css']
})
export class PaymentCalendarComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.payments = this.paymentService.getPayments();
  }
}
