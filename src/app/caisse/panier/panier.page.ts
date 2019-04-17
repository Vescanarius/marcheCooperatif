import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientsService } from '../../clients.service';
import { Client } from '../../client';

@Component({
  selector: 'app-list',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit {

  private client: Client = null;
  private idClient: number = null;

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService,
  ) { }

  ngOnInit() {
    this.idClient = +this.route.snapshot.params['id'];

    // Appel des données client via le service
    this.clientsService.getClient(this.idClient)
      .subscribe(client => this.client = client);
  }

  getClientInfo(idClient: number) {

  }

  addProductToPanier() { }

  removeProductFromPanier() { }

}
