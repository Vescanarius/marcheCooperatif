import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({

    selector: 'add-product-to-panier',
    templateUrl: 'add-product-to-panier.component.html',
    styleUrls: ['add-product-to-panier.component.scss']
})
export class AddProductToPanierComponent {

    
    constructor(
        private router: Router,
      ) { }


    addProductToPanier() {

        let link = ['caisse/panier/ajout/'];
        console.log(link);
        this.router.navigate(link);
    }

   


}
