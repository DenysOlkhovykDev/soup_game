import ScoreSystem from './src/logic/ScoreSystem.js';
import EventBus from "./src/core/EventBus.js";
import { EVENTS } from './src/core/events.js';

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

function preload() {}

function create() {
    this.cameras.main.setBackgroundColor("#c5cdd7");

    this.add
        .text(960, 540, "Soup Game", {
            fontSize: "64px",
            color: "#ffffff",
        })
        .setOrigin(0.5);

    this.add.ellipse(960,540,800,800,0xf0cd3d);

    this.input.on('pointerdown', () => {
      EventBus.emit(EVENTS.POINTER);
    });
}

function update() {}
