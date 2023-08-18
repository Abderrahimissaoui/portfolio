import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { MapComponent } from './components/map/map.component';
import { PopupsComponent } from './components/popups/popups.component';
import { CollectiblesComponent } from './components/collectibles/collectibles.component';
import { GameCanvasComponent } from './components/game-canvas/game-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MapComponent,
    PopupsComponent,
    CollectiblesComponent,
    GameCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
