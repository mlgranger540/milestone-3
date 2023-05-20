document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/reviews',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        let reviewDropdown = document.getElementById("review_dropdown");
        for (let i in data) {
            reviewTitle = data[i].ReviewTitle;
            artistName = data[i].ArtistName;
            venueName = data[i].VenueName;
            concertDate = data[i].ConcertDate;
            reviewName = reviewTitle + " - " + artistName + " @ " + venueName + " " + concertDate;
            var option = document.createElement("option");
            option.text = reviewName;
            option.value = data[i].review_id;
            reviewDropdown.appendChild(option);
        }
    })
});
