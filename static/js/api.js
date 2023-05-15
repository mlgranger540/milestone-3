document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/artist/1',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        document.getElementById("artist_name").innerHTML = data.ArtistName;
        document.getElementById("artist_id").innerHTML = data.artist_id;
    })
});
