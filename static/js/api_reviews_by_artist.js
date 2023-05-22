document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/artists',{method:"GET"}).then(response => response.json()).then((data)=>{
        let artistList = "<ul>";
        for (let i in data) {
            let artistName = data[i].ArtistName;
            let artistID = data[i].artist_id;
            let url = `/artist/${artistID}`;
            artistList += `<li><a href="${url}">` + artistName + `</a></li>`;
        }
        artistList += "</ul>";
        document.getElementById("artist-names").innerHTML = artistList;
    })
});
