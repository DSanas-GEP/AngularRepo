import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from '../food/food.component';

const routes: Routes = [
  {path:'',redirectTo:'/foodimage' ,pathMatch:'full'},
  {path:'foodimage',component:FoodComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageModuleRoutingModule { }
