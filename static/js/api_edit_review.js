document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/reviews',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        let reviewDropdown = document.getElementById("review_dropdown");
        for (let i in data) {
            let reviewTitle = data[i].ReviewTitle;
            let artistName = data[i].ArtistName;
            let venueName = data[i].VenueName;
            let concertDate = data[i].ConcertDate;
            let concertID = data[i].concert_id;
            let reviewName = reviewTitle + " - " + artistName + " @ " + venueName + " " + concertDate;
            var option = document.createElement("option");
            option.text = reviewName;
            option.value = concertID;
            reviewDropdown.appendChild(option);
        }
    })
});
