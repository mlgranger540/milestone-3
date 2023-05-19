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
