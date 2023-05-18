document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/artists',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        let artistList = "<ul>";
        for (let i in data) {
            artistName = (data[i].ArtistName);
            artistList += `<li>` + artistName + `</li>`;
        }
        artistList += "</ul>";
        console.log(artistList);
        document.getElementById("artist-names").innerHTML = artistList;
    })
});
