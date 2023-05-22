document.addEventListener("DOMContentLoaded", async function(event) {
    const reviews_res = await fetch('/api/reviews',{method:"GET"});
    const reviews_json = await reviews_res.json();
    const reviews = reviews_json;
    var reviewDropdown = document.getElementById("review_dropdown");
    for (let i in reviews) {
        let reviewTitle = reviews[i].ReviewTitle;
        let artistName = reviews[i].ArtistName;
        let venueName = reviews[i].VenueName;
        let reviewID = reviews[i].review_id;
        let concertID = reviews[i].concert_id;
        let reviewName = reviewTitle + " - " + artistName + " @ " + venueName;
        var option = document.createElement("option");
        option.text = reviewName;
        option.value = reviewID;
        option.id = concertID;
        reviewDropdown.appendChild(option);
    }

    reviewDropdown.addEventListener("change", async function(event) {
        let selectedOption = event.target.selectedOptions[0];
        console.log(selectedOption);
        let concertID = selectedOption.id;
        console.log(concertID)
        const reviews_by_id_res = await fetch(`/api/concert/id/extended/${concertID}`,{method:"GET"});
        const reviews_by_id_json = await reviews_by_id_res.json();
        const reviews_by_id = reviews_by_id_json;
        let concertOption = document.getElementById("concert_option");
        let tourName = reviews_by_id.TourName;
        let venueName = reviews_by_id.VenueName;
        let concertDate = reviews_by_id.ConcertDate;
        let concertName = tourName + " @ " + venueName + " - " + concertDate;
        concertOption.text = concertName;
        concertOption.value = concertID;
    })
});
