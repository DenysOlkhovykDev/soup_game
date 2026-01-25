import ScoreSystem from './src/logic/ScoreSystem.js';
import EventBus from "./src/core/EventBus.js";
import { EVENTS } from './src/core/events.js';
import { hc } from './src/fixers/color.js';

new ScoreSystem();

const config = {
    type: Phaser.CANVAS,
    width: 1920,
    height: 1080,

    audio: {
        disableWebAudio: true,
        noAudio: true,
    },

    scale: {
        mode: Phaser.Scale.NONE,
    },

    scene: {
        preload,
        create,
        update,
    },
    fps: { forceSetTimeOut: true, target: 60 },
    render: { pixelArt: true },
};

const game = new Phaser.Game(config);
window.game = game;

function preload() {
    this.load.image('soup-pot', 'src/sprites/soup-pot.png');
}

function create() {
    this.cameras.main.setBackgroundColor("#c5cdd7");

    this.add.image(960, 540, 'soup-pot');

    this.add.ellipse(960,492,704,704,hc("#3d3410"), 0.0);

    this.input.on('pointerdown', () => {
      EventBus.emit(EVENTS.POINTER);
    });
}

function update() {}
