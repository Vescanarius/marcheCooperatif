import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Client } from '../client';
import { ClientsService } from '../clients.service';


@Component({
    selector: 'mcScanClient',
    templateUrl: './scan-client.component.html',
})

export class MarcheSearch implements OnInit, OnDestroy {

  private codeClientScan:number = null;
  client:Client= null;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private clientsService:ClientsService
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  rechercheClient(){
    console.log("Début scan");
    this.codeClientScan = 123456789;
    console.log(this.codeClientScan);

    this.clientsService.getClient(this.codeClientScan)
    .subscribe( client => this.client = client)
    console.log("Fin scan");
  }

  scanClient(){

  }
}
