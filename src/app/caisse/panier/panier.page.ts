import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientsService } from '../../clients.service';

import { Client } from '../../client';
import { Panier } from './panier';
import { ProduitsAchetes } from './produitsAchetes';
import { PanierService } from './panier.service';

@Component({
  selector: 'app-list',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit {

  private client: Client = null;
  private idClient: number = null;
  private panierClient:Panier;

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService,
    private panierService: PanierService,
  ) { }

  ngOnInit() {
    this.idClient = +this.route.snapshot.params['id'];

    // Appel des données client via le service
    this.clientsService.getClient(this.idClient)
      .subscribe(client => this.client = client);

    // appel de l'id du dernier panier du client

    // Appel du contenu du panier 
    this.panierService.getPanier(20190400001)
    .subscribe(panier => this.panierClient = panier);
      
  }

  getClientInfo() {

  }

  addProductToPanier() { }

  removeProductFromPanier() { }

}
