import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUITS } from './produits/mock-produits';
import { CLIENTS } from './mock-clients';
import { PANIERS } from './caisse/panier/mock-panier';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let clients = CLIENTS;
		let paniers = PANIERS;
		let produits = PRODUITS;
		return { clients, paniers, produits };
	}

}
