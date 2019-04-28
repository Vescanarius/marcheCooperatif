// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// This Module's Components
import { ChoixProducteurComponent } from './choix-producteur.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,

    ],
    declarations: [
        ChoixProducteurComponent,
    ],
    exports: [
        ChoixProducteurComponent,
    ],

})
export class ChoixProducteurModule {

}
