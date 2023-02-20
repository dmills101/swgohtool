import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerinfoComponent } from './web/components/playerinfo/playerinfo.component';
import { SwCardComponent } from './web/components/sw-card/sw-card.component';
import { LoadingComponent } from './web/components/loading/loading.component';
import { GeneralcategoryComponent } from './web/components/generalcategory/generalcategory.component';
import { ImageLogoComponent } from './web/components/image-logo/image-logo.component';
import { FooterComponent } from './web/main/footer/footer.component';
import { TabviewComponent } from './web/components/tabview/tabview.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerinfoComponent,
    SwCardComponent,
    LoadingComponent,
    GeneralcategoryComponent,
    ImageLogoComponent,
    FooterComponent,
    TabviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], exports: [

  ]
})
export class AppModule { }
