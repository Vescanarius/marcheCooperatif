import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CaissePage } from './caisse.page';


import { MarcheSearch } from './scan-client.component';

import { DroitsClientPipe } from './droits-client.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaissePage
      },
      {
        path: 'panier/:id',
        loadChildren:'./panier/panier.module#PanierPageModule'

      },
    ])
  ],
  declarations: [CaissePage, MarcheSearch, DroitsClientPipe]
})
export class CaissePageModule {}
