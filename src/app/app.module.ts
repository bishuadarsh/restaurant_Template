import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedFoodComponent } from './featured-food/featured-food.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { CleanCategorieNamesPipe } from './pipes/clean-categorie-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedFoodComponent,
    SocialFeedComponent,
    ChefsComponent,
    ProductsComponent,
    MenuComponent,
    CleanCategorieNamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
