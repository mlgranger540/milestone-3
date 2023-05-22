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
});

reviewDropdown.addEventListener("change", async function(event) {
    console.log(event);
})
