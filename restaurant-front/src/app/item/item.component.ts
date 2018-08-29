import { Component, OnInit, Input } from '@angular/core';
import { Plat, PlatsService } from '../service/plats.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title = 'Restaurant > Plat';
  @Input() plat: Plat;
  private id: string;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private platsService: PlatsService) {
  }

  ngOnInit() {
    if (this.plat === undefined) {
      // this.id = this.activateRoute.snapshot.params['id'];
      this.subscription = this.activateRoute.params.subscribe(params => {
        this.id = params['id'];
        this.platsService.getPlatByID(this.id).subscribe(plat => this.plat = plat);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined)
      this.subscription.unsubscribe();
  }

}