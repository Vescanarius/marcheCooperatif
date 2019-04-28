import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'add-product',
    templateUrl: 'add-product.component.html',
    styleUrls: ['add-product.component.scss']
})
export class AddProductComponent implements OnInit {

     //idClient = this.route.snapshot.params['id'];

    constructor(
    ) { }
    
    ngOnInit(): void {

    }



}
