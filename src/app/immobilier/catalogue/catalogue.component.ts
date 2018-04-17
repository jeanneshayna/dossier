import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BienService } from './../../service/bien.service';
import { Bien } from './../../interfaces/bien';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  @Output()
  y: EventEmitter<any> = new EventEmitter<any>();
  @Input() bien: Bien;
  constructor() { }

  ngOnInit() {
  }

  display(bien: Bien) {
    bien.etat = !bien.etat
  }
}
