import { Panier } from './panier';

export const PANIERS: Panier[] = [
	{
		id: 20190400001,
		dateAchat: new Date(),
		client: 123456789,
		produitsAchetes: [

			// rangement obligatoire par producteur
			{
				id: 596,
				poids: 0.5,
				producteur: 156,
				prixKg: 6,
			},

			{
				id: 597,
				poids: 1.6,
				producteur: 256,
				prixKg: 9,
			},
		]

	},
];
