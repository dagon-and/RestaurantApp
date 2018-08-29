import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlatsComponent } from '../plats/plats.component';
import { ItemComponent } from '../item/item.component';
import { PlatResolver } from '../service/plat-resolver.service';

const appRoutes: Routes = [
  { path: '',  redirectTo: '/plats',  pathMatch: 'full'},
  { path: 'plats', component: PlatsComponent },
  { path: 'plat/:id', component: ItemComponent, resolve: { plat: PlatResolver } }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes/* , { enableTracing: true  // debugging purposes only } */)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
