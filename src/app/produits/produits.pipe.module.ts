import { NgModule }      from '@angular/core';
import { ProduitsPipeValue } from './produits.pipe';

 @NgModule({
     imports:        [],
     declarations:   [ProduitsPipeValue],
     exports:        [ProduitsPipeValue],
 })

 export class ProduitPipeModule {

   static forRoot() {
      return {
          ngModule: ProduitPipeModule,
          providers: [],
      };
   }
 } 