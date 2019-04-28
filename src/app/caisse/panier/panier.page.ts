import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientsService } from '../../clients.service';

import { Client } from '../../client';
import { Panier } from './panier';
import { ProduitsAchetes } from './produitsAchetes';
import { PanierService } from './panier.service';
import { ProduitsService } from 'src/app/produits/produits.service';
import { Produit } from 'src/app/produits/produit';
import { startWith, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit { 

  client: Client;
  idClient: number;
  panierClient: Panier;
  totalPanier: number;
  prixProduitAchete: number;


  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService,
    private panierService: PanierService,
    private produitsService: ProduitsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idClient = this.route.snapshot.params['id'];

    // Appel des données client via le service
    this.clientsService.getClient(this.idClient)
      .subscribe({
        next: client => this.client = client,
        error: err => console.error('Observer got an error: ' + err),
        complete: () => this.getPanier(),
      }
      );
  }


  getPanier(): void {

    // appel de l'id du dernier panier du client
    let idPanier :number = 20190400001

    // si panier cloturé

    // Appel du contenu du panier 
     
    this.panierService.getPanier(idPanier)
      .subscribe(
        panier => this.panierClient = panier,
      );
  }


  getProduitInfo(id: number): void {
    let produitInfo: Produit = null;
    // Appel du contenu de chaque produit 
    this.produitsService.getProduit(id)
      .subscribe(
        produit => produitInfo = produit,
      );
  }


  addProductToPanier(id, idPanier) {
    let link = ['caisse/panier/' + id + '/ajout/'+ idPanier];
    console.log(link);
    this.router.navigate(link);
  }
  removeProductFromPanier() {
    
  }



}
