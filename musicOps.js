function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name){
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function(){
    let totalTracks = this.tracks.length;
    let ratings = 0;
    this.tracks.forEach( track => {
      ratings += track.rating;
    })
    let overallRating = ratings / totalTracks;
    return overallRating;
  };

Playlist.prototype.overallDuration = function(){
    let duration = 0;
    this.tracks.forEach( track => {
      duration += track.length;
    })
    return duration;
  }

function Tracks(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const lib = new Library("Raf Lib", "Raf");
const p1 = new Playlist("Playlist1");
const t1 = new Tracks("Vegas", 5, 30);
const t2 = new Tracks("Martina", 6, 40);
p1.tracks.push(t1);
p1.tracks.push(t2);
lib.playlists.push(p1);

console.log(p1.overallDuration());
console.log(p1.overallRating());

