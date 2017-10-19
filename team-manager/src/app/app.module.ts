import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    ManagePlayerComponent,
    ManageStatusComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
