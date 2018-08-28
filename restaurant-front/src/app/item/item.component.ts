import { Component, OnInit, Input } from '@angular/core';
import { Plat } from '../service/plats.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() plat: Plat;

  constructor() { }

  ngOnInit() {
  }

}