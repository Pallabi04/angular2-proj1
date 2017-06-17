import { by } from 'protractor';
import { Component, Input } from '@angular/core';
import { ICrib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent {

  @Input('cribs') crib: ICrib;

  constructor() {}

}
