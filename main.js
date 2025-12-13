const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,

    audio: {
        disableWebAudio: true,
        noAudio: true
    },
    
    scale: {
        mode: Phaser.Scale.NONE
    },

    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

function preload () {
}

function create () {
    this.cameras.main.setBackgroundColor('#c5cdd7');

    this.add.text(960, 540, 'Soup Game', {
        fontSize: '64px',
        color: '#ffffff'
    }).setOrigin(0.5);
}

function update () {
}
