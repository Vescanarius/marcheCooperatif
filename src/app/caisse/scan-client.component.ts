import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Router } from '@angular/router';


@Component({
  selector: 'mcScanClient',
  templateUrl: './scan-client.component.html',
})

export class MarcheSearch implements OnInit, OnDestroy {

  private codeClientScan: number = null;
  client: Client = null;
  private erreurScan: boolean = null;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private clientsService: ClientsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  rechercheClient() {
    console.log("Début scan");

    //this.codeClientScan = this.scanClient();
    this.codeClientScan = 123456789;

    console.log(this.codeClientScan);

    // Appel du client via le service
    this.clientsService.getClient(this.codeClientScan)
      .subscribe(client => this.client = client);

    console.log("Fin scan");
  }
  retourScan(): void {
    this.client = null;
    this.codeClientScan = null;
  }

  goEditPanier(client:Client):void{
   let link = ['caisse/panier/', this.client.id];
    console.log(link);
		this.router.navigate(link);
	}
  
  scanClient(): any {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.erreurScan = false;
      return barcodeData;

    }).catch(err => {
      this.erreurScan = true;
      console.log('Error', err);

    });

  }
}
