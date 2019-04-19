import { Produit } from './produit';

export const PRODUITS: Produit[] = [
	{
		id: 596,
		nom: "Courgette",
		producteur: [569, 570],
		created: new Date(),
		prixKg: [
			{569: 36}, 
			{570:  38}
		],
	},
	{
		id: 597,
		nom: "Lomge",
		producteur: [569],
		prixKg: [
			{569: 45}
		],
		created: new Date(),
	},
];
