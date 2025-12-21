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
}

function update() {}
