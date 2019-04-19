import { Component, OnInit, Input } from '@angular/core';
import { ProduitsService } from './produits.service';

@Component({
    selector: 'titreProduit',
    template: '<span class="title">{{beauTitreProduit}}</span>',

})
export class TitreProduitComponent implements OnInit {

    @Input() idProduit:number;

    beauTitreProduit: string = null;
    constructor(private produitsService: ProduitsService,) {
    }
    ngOnInit() {

          // Appel des données produits via le service
    this.produitsService.getProduit(this.idProduit)
    .subscribe(
        produit => this.beauTitreProduit = produit.nom,
        );

        

    }

}
