// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// This Module's Components
import { AddProductComponent } from './add-product.component';
import { ChoixProducteurModule } from '../choix-producteur/choix-producteur.module'; 


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChoixProducteurModule,
        RouterModule.forChild([
            {
                path: 'ajout/:idPanier',
                component: AddProductComponent
            },
        ]),

    ],
    declarations: [
        AddProductComponent,

       
    ],
    exports: [
        AddProductComponent,
    ]
})
export class AddProductModule {

}
