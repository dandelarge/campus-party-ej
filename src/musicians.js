class Artist {
  doArt(){
    console.log('Making creative stuff');
  }

  thinkArtisticly() {
    console.log('Thinking....');
  }
}

class Musician extends Artist {
  makeMusic() {
    console.log('making good music');
  }
}

var lionel = new Musician();
lionel.doArt();
lionel.makeMusic();
