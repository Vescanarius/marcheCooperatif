import { Panier } from './panier';

export const PANIERS: Panier[] = [
	{
		id: 20190400001,
    dateAchat: new Date(),
    client:123456789,
    produitsAchetes:[
			{
				id:596,
				poids: 150,
				prixKg:6,
				producteur:156,
			},
			{
				id:596,
				poids: 350,
				prixKg:8,
				producteur:256,
			},
		]

	},
];
