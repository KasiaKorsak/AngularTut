import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.components';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
