import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { PhaserService } from '../../services/phaser.service';

@Component({
  selector: 'app-game-canvas',
  template: '',
  styleUrls: ['./game-canvas.component.scss']
})
export class GameCanvasComponent implements AfterViewInit, OnDestroy {

  constructor(private phaserService: PhaserService) {}

  ngAfterViewInit() {
    this.phaserService.initGame('gameContainer');
  }

  ngOnDestroy() {
    this.phaserService.game.destroy(true);
  }
}
