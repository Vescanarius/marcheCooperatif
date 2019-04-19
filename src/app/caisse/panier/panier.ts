import { Produit } from 'src/app/produits/produit';

export class Panier {
    id: number;
    dateAchat: Date;
    client:Number;
    produitsAchetes:Array<any>;
  }
  