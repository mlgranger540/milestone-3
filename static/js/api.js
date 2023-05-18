document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/artists',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        let artistList = "<ul>";
        for (let i in data) {
            artistName = data[i].ArtistName;
            artistID = data[i].artist_id;
            let url = `/artist/${artistID}`;
            artistList += `<li><a href="${url}">` + artistName + `</a></li>`;
        }
        artistList += "</ul>";
        console.log(artistList);
        document.getElementById("artist-names").innerHTML = artistList;
    })
});

// document.addEventListener("click", async function(event) {
//     const artist_res = await fetch(`/api/artist/${event.target.textContent}`,{method:"GET"});
//     const artist_json = await artist_res.json();
//     const artist = artist_json;
//     console.log(artist.artist_id + " " + artist.ArtistName + " " + artist.genre_id);
//     document.getElementById("h1-artist").innerHTML = artist.ArtistName;
// });



// let url = "{{ url_for('artist_reviews') }}"
// `/artist/${artistName}`