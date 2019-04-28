import { Component, OnInit } from '@angular/core';
import { Producteur } from 'src/app/producteur';
import { ProducteurService } from 'src/app/producteur.service';



@Component({
    selector: 'choix-producteur',
    templateUrl: 'choix-producteur.component.html',
    styleUrls: ['choix-producteur.component.scss']
})
export class ChoixProducteurComponent implements OnInit {

    producteurs = null;

    constructor(
        private producteurService: ProducteurService,

    ) { }

    ngOnInit(): void {

        this.producteurService.getProducteurs()
            .subscribe(
                producteurs => this.producteurs = producteurs,
                (err) => console.error(err),
            )

    }

    selectProducteur(idProducteur) {

    }

}
