document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/concerts/extended',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        let concertDropdown = document.getElementById("concert_dropdown");
        for (let i in data) {
            tourName = data[i].TourName;
            venueName = data[i].VenueName;
            concertDate = data[i].ConcertDate;
            concertName = tourName + " @ " + venueName + " - " + concertDate;
            var option = document.createElement("option");
            option.text = concertName;
            option.value = data[i].concert_id;
            concertDropdown.appendChild(option);
        }
    })
});
