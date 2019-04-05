import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
    selector: 'mcScanClient',
    templateUrl: './scan-client.component.html',
      styleUrls: [],
})


export class MarcheSearch implements OnInit, OnDestroy {

  private displayCode:string = "";

  constructor(
    private barcodeScanner: BarcodeScanner,
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  scanClient(){

  
  }
}
