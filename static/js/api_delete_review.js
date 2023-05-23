document.addEventListener("DOMContentLoaded", async function(event) {
    // Get id of currently logged in user
    const user_res = await fetch("/api/user/current", {method:"GET"});
    const user_json = await user_res.json();
    const user = user_json;
    var currentUserID = user.id;

    // Use current user id to build dropdown of their existing reviews
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

    // Delete review button gets review id from form data to delete chosen review
    let deleteReviewButton = document.getElementById("delete-review-button");
    deleteReviewButton.addEventListener("click", async function(event) {
        event.preventDefault();
        let deleteForm = document.getElementById("delete-form");
        const formData = new FormData(deleteForm);
        let reviewID = formData.get("review_id");
        await fetch(`/api/review/${reviewID}`, {method:"DELETE"}).then((response) => {
            if (response.status === 200) {
                let modalTrigger = document.getElementById("success-modal-trigger");
                modalTrigger.click();
            }
        })
    })
});
