const makeAlbum = (artistName,albumTitle,numberOfTracks=undefined) =>{
    const obj = {
        artistName,
        albumTitle,
        numberOfTracks:numberOfTracks,
    }

    if(!numberOfTracks){
        delete obj.numberOfTracks
    }
    return obj;
}

console.log(makeAlbum('Ahsan Shah','Shah Album'));
console.log(makeAlbum('Ahsan Shah','Shah Album 2',4));
console.log(makeAlbum('Ammar','Ammar Album 2'));
