import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PanierPage } from './panier.page';
import { PanierService } from './panier.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PanierPage
      },
      
      
    ])
  ],
  declarations: [PanierPage],
  providers: [
    PanierService,
  ],
})
export class PanierPageModule {}
