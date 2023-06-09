document.addEventListener("DOMContentLoaded", async function(event) {
    const reviews_res = await fetch("/api/reviews", {method:"GET"});
    const reviews_json = await reviews_res.json();
    const reviews = reviews_json;
    reviews.sort((a,b)=>{return b.review_id-a.review_id});
    let reviewsDiv = "<div>";
    for (let i in reviews){
        let reviewTitle = reviews[i].ReviewTitle;
        let reviewRating = reviews[i].ReviewRating;
        let firstName = reviews[i].FirstName;
        let lastName = reviews[i].LastName;
        let username = reviews[i].UserName;
        let reviewText = reviews[i].ReviewText;
        let artistName = reviews[i].ArtistName;
        let concertDate = reviews[i].ConcertDate;
        let tourName = reviews[i].TourName;
        let venueName = reviews[i].VenueName;
        let cityName = reviews[i].CityName;
        reviewsDiv += "<div>";
        reviewsDiv += "<h3>" + reviewRating + "/10" + " - " + reviewTitle + " — " + firstName + " " + lastName + " (" + username + ")" + "</h3>";
        reviewsDiv += "<h4>" + artistName + " @ " + venueName + ", " + cityName + " — " + concertDate + "</h4>";
        reviewsDiv += "<h5>" + tourName + "</h5>";
        reviewsDiv += "<p>" + reviewText + "</p>";
        reviewsDiv += "</div>";
        reviewsDiv += "<hr>";
    }
    reviewsDiv += "</div>";
    document.getElementById("recent-reviews").innerHTML = reviewsDiv;
});
