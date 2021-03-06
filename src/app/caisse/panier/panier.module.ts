import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PanierPage } from './panier.page';
import { PanierService } from './panier.service';
import { ProduitPipeModule } from 'src/app/produits/produits.pipe.module';
import { TitreProduitComponent } from '../../produits/titreProduit.component';
import { MarcheLoaderComponent } from 'src/app/loader.component';
import { AddProductModule } from './add-product/add-product.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PanierPage,
        loadChildren: './add-product/add-product.module#AddProductModule'
      },
    ]),
    ProduitPipeModule.forRoot(),
    AddProductModule,

  ],
  declarations: [
    PanierPage,
    TitreProduitComponent,
    MarcheLoaderComponent
  ],
  providers: [
    PanierService,
  ],
})
export class PanierPageModule { }
