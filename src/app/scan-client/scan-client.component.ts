import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Client } from './client';
import { ClientsService } from '../clients.service';


@Component({
    selector: 'mcScanClient',
    templateUrl: './scan-client.component.html',
      styleUrls: [],
})

export class MarcheSearch implements OnInit, OnDestroy {

  private codeClientScan:number = "";
  client:Client= null;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private clientsService:ClientsService
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }


  scanClient(){
    console.log("Début scan");
    this.codeClientScan = 123456789;
    console.log(this.codeClientScan);

    this.clientsService.getClient(this.codeClientScan)
    .subscribe(client => this.client = client);

    console.log('Vous avez selectionné ' + this.client);

  };
}
