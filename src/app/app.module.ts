import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgeValidatorComponent } from './age-validator/age-validator.component';
import { InputValidatorComponent } from './input-validator/input-validator.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { MathTableComponent } from './math-table/math-table.component';
import { EngineDirectiveDirective } from './directive/engine-directive.directive';
import { UserSearchComponent } from './user-search/user-search.component';
import { SearchPipe } from './pipes/search.pipe';
import { ChildComponetComponent } from './child-componet/child-componet.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';




@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, FooterComponent, AgeValidatorComponent, InputValidatorComponent, ImageSelectorComponent, MathTableComponent, EngineDirectiveDirective, UserSearchComponent, SearchPipe, ChildComponetComponent, ParentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
