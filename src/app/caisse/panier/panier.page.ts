import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage implements OnInit {

  

  constructor(
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log(id);
  }
 
}
