import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
    selector: 'mcScanClient',
    templateUrl: './scan-client.component.html',
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
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

    this.barcodeScanner.scan(
      function (result) {

          condole.log("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);

                this.displayCode = result.text;

      },
      function (error) {
          condole.log("Scanning failed: " + error);
          this.displayCode = "123456789";
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : false, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: false, // Android, save scan history (default false)
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
  }
}
