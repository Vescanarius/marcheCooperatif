import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientsService } from '../../clients.service';

import { Client } from '../../client';
import { Panier } from './panier';
import { ProduitsAchetes } from './produitsAchetes';
import { PanierService } from './panier.service';
import { ProduitsService } from 'src/app/produits/produits.service';
import { Produit } from 'src/app/produits/produit';

@Component({
  selector: 'app-list',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit {

  client: Client = null;
  idClient: number = null;
  panierClient: Panier = null;
  prixKg:number=null;

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService,
    private panierService: PanierService,
    private produitsService: ProduitsService,
  ) { }



  ngOnInit(): void {

    this.idClient = +this.route.snapshot.params['id'];

    // Appel des données client via le service
    this.clientsService.getClient(this.idClient)
      .subscribe(client => this.client = client);

    // appel de l'id du dernier panier du client

    // si panier cloturé

    // Appel du contenu du panier 
    this.panierService.getPanier(20190400001)
      .subscribe(
        panier => this.panierClient = panier,
      );

  }

  getProduitInfo(id: number) {
    let produitInfo: Produit = null;
    // Appel du contenu de chaque produit 
    this.produitsService.getProduit(id)
      .subscribe(
        produit => produitInfo = produit,
      );
  }


  prixProduitAchete(poids: number, prixkg: number): number {
    let value: number = null;
    //console.log(poids, prixkg);
    value = Number(poids) * Number(prixkg);
    return value;
  }

  addProductToPanier() {}

  removeProductFromPanier() {}

}
