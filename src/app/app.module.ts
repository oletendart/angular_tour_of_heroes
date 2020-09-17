import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [ 
    AppComponent, 
    HeroesComponent, 
    MessagesComponent, DashboardComponent, HeroDetailComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService, MessageService]
})
export class AppModule { }
