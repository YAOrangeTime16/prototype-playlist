
function Playlist(){
    //Playlisten ska inte ta några argument men ska ha följande variabler:
    this.songs = [];
    this.isPlaying = false;
    this.playingIndex = 0;

    
}
Playlist.prototype.add = function(song){
    //Denna funktion ska lägga till en ny låt till playlisten
    this.song = song;
    this.songs.push(this.song);
    
};

Playlist.prototype.play = function(){
    //Denna funktion ska starta playlisten och låten
    this.isPlaying = true;
    return this.getCurrent;
};


Playlist.prototype.stop = function(){
    //Denna funktion ska stoppa låten samt stoppa playlisten
    this.isPlaying = false;

};

Playlist.prototype.next = function(){
    //Denna funktion ska byta låt. Om vi är på sista låten ska
    //funktionen gå tillbaka till första låten om vi anropar funktionen medan
    //vi står på sista låten
    if (this.playingIndex == this.songs.length -1) {
        this.playingIndex = 0;
    }
    else {
        this.playingIndex +=1;
    }
    return this.songs[this.playingIndex];
};

Playlist.prototype.getCurrent = function(){
    //Returnera nuvarande låten
    return this.songs[this.playingIndex];
};









