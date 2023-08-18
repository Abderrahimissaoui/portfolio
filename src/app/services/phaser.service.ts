import { Injectable } from '@angular/core';
import Phaser from 'phaser';

@Injectable({
  providedIn: 'root'
})
export class PhaserService {
  game: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    };
  }

  initGame(containerId: string): void {
    this.config.parent = containerId;
    this.game = new Phaser.Game(this.config);
  }

  preload() {
    // Load game assets here
  }

  create() {
    // Initialize game objects here
  }

  update() {
    // Update game loop logic here
  }
}
