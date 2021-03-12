import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgeValidatorComponent } from './age-validator/age-validator.component';
import { InputValidatorComponent } from './input-validator/input-validator.component';

import { MathTableComponent } from './math-table/math-table.component';
import { EngineDirectiveDirective } from './directive/engine-directive.directive';
import { UserSearchComponent } from './user-search/user-search.component';
import { SearchPipe } from './pipes/search.pipe';
import { ChildComponetComponent } from './child-componet/child-componet.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AgeAssignmentComponent } from './age-assignment/age-assignment.component';

import { UserServiceService} from './service/user-service.service';
import { HttpComponent } from './http/http.component';
import { HttpsComponent } from './https/https.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GPComponent } from './gp/gp.component';
import { GCComponent } from './gc/gc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageModuleModule } from './food/image-module/image-module.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './forms/forms.component';
import { FormDataComponent } from './form-data/form-data.component';
import { AuthServiceService } from './auth-service.service';
import { DiscountPipe } from './pipes/discount.pipe';
import { TestComponent } from './test/test.component';
import { Q2A1Component } from './q2-a1/q2-a1.component';
import { Test3Component } from './test3/test3.component';
import { TodoListComponent } from './todo-list/todo-list.component';











@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, AgeValidatorComponent, InputValidatorComponent,
     MathTableComponent, EngineDirectiveDirective, UserSearchComponent, SearchPipe, 
     ChildComponetComponent, ParentComponentComponent, ProductsComponent, ProductComponent,
      AgeAssignmentComponent,HttpComponent,HttpsComponent,ImageSelectorComponent,HomeComponent,
       ProductDetailsComponent, GPComponent, GCComponent, PageNotFoundComponent,
        UserRegistrationComponent, RegisterComponent, FormsComponent, FormDataComponent, 
        DiscountPipe, TestComponent, Q2A1Component, Test3Component, TodoListComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    ImageModuleModule,AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [UserServiceService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
