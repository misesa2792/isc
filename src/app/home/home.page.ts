import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SistemasService } from '../sistemas.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user : any;
  rows;
  
  constructor(private route : ActivatedRoute,
              private api : SistemasService     
    ) {
    this.user = this.route.snapshot.paramMap.get('user');
    this.datos();//método}
    this.rows;
  }
  datos(){
    this.api.getDatos().subscribe((data) => {
      this.rows = data;
    })
  }

}
