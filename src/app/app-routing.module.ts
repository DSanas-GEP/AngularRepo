import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { HttpsComponent } from './https/https.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {GPComponent} from './gp/gp.component';
import { GCComponent } from './gc/gc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MathTableComponent } from './math-table/math-table.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { FormDataComponent } from './form-data/form-data.component';
import { AuthServiceService } from './auth-service.service';

const routes: Routes = [

  // {path:'', redirectTo:'/http', pathMatch:'full'},
// {path:'',component:HttpComponent , pathMatch:'full'},
  {path:'home', component:HomeComponent , children:[ 
    {path:'',component:FooterComponent},
    {path:'table', component:MathTableComponent
    }
  ]},
  {path:'register', component:RegisterComponent
},
  {path:'image' ,component:ImageSelectorComponent},
  {path:'http', component:HttpComponent},
  {path:'http/:id/:name',component:HttpsComponent},
  { path: 'products', component: ProductsComponent , canActivate:[AuthServiceService] },
  { path:'products/:description/:title', component: ProductDetailsComponent},
  {path:'GP',component:GPComponent},
  {path:'GP/:id',component:GCComponent},
  {path:'food',loadChildren:'./food/image-module/image-module.module#ImageModuleModule'},
  {path:'forms', component:FormsComponent},
  {path:'forms/:path', component:FormsComponent},



  {path:'**',component:PageNotFoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


