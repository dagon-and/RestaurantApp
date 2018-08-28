import { Component } from '@angular/core';
import { Plat, PlatsService } from './service/plats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant > Plats';
  // private plats: Plat[];

  constructor(private platsService: PlatsService) { }

  ngOnInit() {
    // this.platsService.getPlats().subscribe(plats => this.plats = plats);
    this.platsService.onInit();
  }

}
