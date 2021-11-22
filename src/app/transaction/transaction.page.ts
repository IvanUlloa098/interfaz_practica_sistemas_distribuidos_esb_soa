import { Component, OnInit } from '@angular/core';
import { RequestESB } from '../class/request';
import { ESBserviceService } from '../services/esbservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  private bankInfo: any
  private aux = new RequestESB()

  constructor(private esbService : ESBserviceService) { 
    this.aux.id = 1
    this.aux.nombre = "payload"

    this.bankInfo = this.esbService.startTransaction(this.aux).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully 
    });
    
  }

  ngOnInit() {
    
  }

  getBankInformation() {
    
    
  }

}
