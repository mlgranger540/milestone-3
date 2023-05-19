document.addEventListener("DOMContentLoaded", async function(event) {
    const artist_res = await fetch(`/api/${window.location.pathname}`,{method:"GET"});
    const artist_json = await artist_res.json();
    const artist = artist_json;
    console.log(artist.artist_id + " " + artist.ArtistName + " " + artist.genre_id);
    document.getElementById("artist-name").innerHTML = artist.ArtistName;
    // document.getElementById("artist-reviews").innerHTML = 
});
