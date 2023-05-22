document.addEventListener("DOMContentLoaded", async function(event) {
    const user_res = await fetch("/api/user/current", {method:"GET"});
    const user_json = await user_res.json();
    const user = user_json;
    var currentUserID = user.id;

    const reviews_res = await fetch(`/api/reviews/user/${currentUserID}`,{method:"GET"});
    const reviews_json = await reviews_res.json();
    const reviews = reviews_json;
    let reviewDropdown = document.getElementById("review_dropdown");
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

    let deleteReviewButton = document.getElementById("delete-review-button");
    deleteReviewButton.addEventListener("click", async function(event) {
        event.PreventDefault;
        let form = document.getElementById("delete-form");
        const formData = new FormData(form);
        let reviewID = formData.get("review_id");
        await fetch(`/api/review/${reviewID}`, {method:"DELETE"});
    })
});
