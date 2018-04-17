import { Component, OnInit } from '@angular/core';
import { BienService } from './../service/bien.service';
import { Bien } from './../interfaces/bien';

@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {
  biens: Bien[];
  constructor(private data: BienService) { }

  ngOnInit() {
    this.data.getAllBiens().subscribe(result => {
      this.biens = result.data as Bien[];


    })
  }

}

 


