document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/concerts/extended',{method:"GET"}).then(response => response.json()).then((data)=>{
        let concertDropdown = document.getElementById("concert_dropdown");
        for (let i in data) {
            let tourName = data[i].TourName;
            let venueName = data[i].VenueName;
            let concertDate = data[i].ConcertDate;
            let concertID = data[i].concert_id;
            let concertName = tourName + " @ " + venueName + " - " + concertDate;
            var option = document.createElement("option");
            option.text = concertName;
            option.value = concertID;
            concertDropdown.appendChild(option);
        }
    })
});
