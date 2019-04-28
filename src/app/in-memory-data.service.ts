import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUITS } from './produits/mock-produits';
import { CLIENTS } from './mock-clients';
import { PANIERS } from './caisse/panier/mock-panier';
import { PRODUCTEURS } from './mock-producteurs';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let clients = CLIENTS;
		let paniers = PANIERS;
		let produits = PRODUITS;
		let producteurs = PRODUCTEURS;
		return { clients, paniers, produits, producteurs};
	}

}
