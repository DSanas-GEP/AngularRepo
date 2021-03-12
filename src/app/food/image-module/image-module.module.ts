import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModuleRoutingModule } from './image-module-routing.module';
import { FoodComponent } from '../food/food.component';


@NgModule({
  declarations: [FoodComponent],
  imports: [
    CommonModule,
    ImageModuleRoutingModule
  ]
})
export class ImageModuleModule { }
