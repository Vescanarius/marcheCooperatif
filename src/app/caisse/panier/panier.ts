import { Produit } from 'src/app/produit';

export class Panier {
    id: number;
    created: Date;
    client:Number;
    produits:Array<Produit>;
  }
  