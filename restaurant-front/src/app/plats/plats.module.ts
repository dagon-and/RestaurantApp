import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PlatsComponent } from './plats.component';
import { ItemComponent } from '../item/item.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  declarations: [PlatsComponent, ItemComponent],
  exports: [PlatsComponent]
})
export class PlatsModule { }
