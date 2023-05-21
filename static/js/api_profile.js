document.addEventListener("DOMContentLoaded", async function(event) {
    const user_res = await fetch("/api/user/current", {method:"GET"});
    const user_json = await user_res.json();
    const user = user_json;
    var currentUserID = user.id;

    const reviews_res = await fetch(`/api/reviews/user/${currentUserID}`, {method:"GET"});
    const reviews_json = await reviews_res.json();
    const reviews = reviews_json;
    reviews.sort((a,b)=>{return b.review_id-a.review_id});
    let reviewsDiv = "<div>";
    for (let i in reviews){
        console.log(reviews[i]);
        let reviewTitle = reviews[i].ReviewTitle;
        let reviewRating = reviews[i].ReviewRating;
        let reviewText = reviews[i].ReviewText;
        let artistName = reviews[i].ArtistName;
        let concertDate = reviews[i].ConcertDate;
        let tourName = reviews[i].TourName;
        let venueName = reviews[i].VenueName;
        let cityName = reviews[i].CityName;
        reviewsDiv += "<div>";
        reviewsDiv += "<h3>" + reviewRating + "/10" + " - " + reviewTitle + "</h3>";
        reviewsDiv += "<h4>" + artistName + " @ " + venueName + ", " + cityName + " — " + concertDate + "</h4>";
        reviewsDiv += "<h5>" + tourName + "</h5>";
        reviewsDiv += "<p>" + reviewText + "</p>";
        reviewsDiv += "</div>";
        reviewsDiv += "<hr>";
    }
    reviewsDiv += "</div>";
    document.getElementById("user-reviews").innerHTML = reviewsDiv;
});
