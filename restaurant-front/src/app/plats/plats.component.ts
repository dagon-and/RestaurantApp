import { Component, OnInit } from '@angular/core';
import { PlatsService, Plat } from '../service/plats.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  title = 'Restaurant > Plats';
  // private plats: Plat[];

  isAdd: boolean = false;
  addPlat: FormGroup;

  constructor(private platsService: PlatsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    // this.platsService.getPlats().subscribe(plats => this.plats = plats);
    this.platsService.getPlats();
    this.addPlat = this.fb.group({
      'nom': ["", Validators.required],
      'prix': ["", [Validators.required, Validators.pattern(/^\d+(.\d\d)?$/)]],
      'description': ["", [Validators.required]]
    });
  }

  onSubmit() {
    this.isAdd = false;

    if (this.addPlat.invalid) return;

    this.platsService.plats.subscribe(value => {
      let plat: any = this.addPlat.value;
      // console.log(value[value.length - 1]);
      plat.id = value[value.length - 1].id + 1;
      // console.log(plat);
      this.platsService.postPlat(plat)
        .subscribe(() => {
          // this.platsService.plats.subscribe(v => console.log(v));
          this.platsService.getPlats();
        });
    });
  }
}
