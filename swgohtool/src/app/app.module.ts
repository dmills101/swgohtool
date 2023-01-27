import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerinfoComponent } from './web/components/playerinfo/playerinfo.component';
import { GalacticlegendsComponent } from './web/components/galacticlegends/galacticlegends.component';
import { EventsComponent } from './web/components/events/events.component';
import { SwCardComponent } from './web/components/sw-card/sw-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerinfoComponent,
    GalacticlegendsComponent,
    EventsComponent,
    SwCardComponent 
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
