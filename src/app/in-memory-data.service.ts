import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUITS } from './mock-produits';
import { CLIENTS } from './mock-clients';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let clients = CLIENTS;
		return { clients };
	}
}
