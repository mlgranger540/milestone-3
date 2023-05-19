document.addEventListener("DOMContentLoaded", async function(event) {
    const review_res = await fetch("/api/reviews", {method:"GET"});
    const review_json = await review_res.json();
    const review = review_json;
    let reviewsDiv = "<div>";
    for (let i in review){
        console.log(review[i]);
        let reviewTitle = review[i].ReviewTitle;
        let reviewRating = review[i].ReviewRating;
        let firstName = review[i].FirstName;
        let lastName = review[i].LastName;
        let username = review[i].UserName;
        let reviewText = review[i].ReviewText;
        let artistName = review[i].ArtistName;
        let concertDate = review[i].ConcertDate;
        let tourName = review[i].TourName;
        let venueName = review[i].VenueName;
        let cityName = review[i].CityName;
        reviewsDiv += "<div>";
        reviewsDiv += "<h3>" + reviewRating + "/10" + " - " + reviewTitle + " — " + firstName + " " + lastName + " (" + username + ")" + "</h3>";
        reviewsDiv += "<h4>" + artistName + " @ " + venueName + ", " + cityName + " — " + concertDate + "</h4>";
        reviewsDiv += "<h5>" + tourName + "</h5>";
        reviewsDiv += "<p>" + reviewText + "</p>";
        reviewsDiv += "</div>";
    }
    reviewsDiv += "</div>";
    document.getElementById("recent-reviews").innerHTML = reviewsDiv;
});
