const Tone              = require('./lib/Tone');

class GameController {
    constructor(app) {
        // setup play/pause button
        this.playButton = document.getElementById('play-button');
        this.playButton.addEventListener('click', function(event) {
            // toggle song playing
            app.gameModel.isPlaying ? app.pauseSong() : app.playSong();
        }.bind(this));

        // setup random button
        this.randomButton = document.getElementById('random-button');
        this.randomButton.addEventListener('click', function(event) {
            /*
            app.pauseSong();
            app.clearSong();
            app.randomSong();
            app.loadSong();
            app.updatePlayfield();
            app.resetSong();
            */
            app.reloadAll();
        }.bind(this));

        // export button currently does nothing
        this.exportButton = document.getElementById('export-button');
        this.exportButton.addEventListener('click', function(event) {
            console.log('export button pressed');
        }.bind(this));

        // switch to piano sound files
        this.pianoButton = document.getElementById('piano-button');
        this.pianoButton.addEventListener('click', function(event) {
            app.gameModel.selectedPath = app.gameModel.instruments['piano'];
            app.reloadAll();
        }.bind(this));

        // switch to clavinet sound files
        this.clavButton = document.getElementById('clav-button');
        this.clavButton.addEventListener('click', function(event) {
            app.gameModel.selectedPath = app.gameModel.instruments['clavinet'];
            app.reloadAll();
        }.bind(this));
    }

    // play song via transport
    playSong(app) {
        Tone.Transport.start('+0.1');
        app.gameModel.isPlaying = true;
    }

    // pauses transport thus pausing song
    pauseSong(app) {
        Tone.Transport.pause();
        app.gameModel.isPlaying = false;
    }

    // restart song by setting transport to beginning
    resetSong() {
        Tone.Transport.position = '0:0:0';
    }
}

module.exports = GameController;