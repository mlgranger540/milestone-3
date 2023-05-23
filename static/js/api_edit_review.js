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

    // Use currently selected dropdown option to fetch concert id and update concert dropdown option
    let selectedOption = event.target.forms[0][0].selectedOptions[0];
    let concertID = selectedOption.id;
    const concert_res = await fetch(`/api/concert/id/extended/${concertID}`,{method:"GET"});
    const concert_json = await concert_res.json();
    const concert = concert_json;
    let concertOption = document.getElementById("concert_option");
    let tourName = concert.TourName;
    let venueName = concert.VenueName;
    let concertDate = concert.ConcertDate;
    let concertName = tourName + " @ " + venueName + " - " + concertDate;
    concertOption.text = concertName;
    concertOption.value = concertID;

    // Use id of selected review to pre-populate form fields with existing review data
    let reviewID = reviewDropdown.value;
    let titleField = document.getElementById("review-title");
    let ratingField = document.getElementById("review-rating");
    let textField = document.getElementById("review-text");
    const review_by_id_res = await fetch(`/api/review/${reviewID}`,{method:"GET"});
    const review_by_id_json = await review_by_id_res.json();
    const review_by_id = review_by_id_json;
    titleField.value = review_by_id[0].ReviewTitle;
    ratingField.value = review_by_id[0].ReviewRating;
    textField.value = review_by_id[0].ReviewText;

    // Fill out concert dropdown and form fields also when review dropdown is changed
    reviewDropdown.addEventListener("change", async function(event) {
        let selectedOption = event.target.selectedOptions[0];
        let concertID = selectedOption.id;
        const concert_res = await fetch(`/api/concert/id/extended/${concertID}`,{method:"GET"});
        const concert_json = await concert_res.json();
        const concert = concert_json;
        let concertOption = document.getElementById("concert_option");
        let tourName = concert.TourName;
        let venueName = concert.VenueName;
        let concertDate = concert.ConcertDate;
        let concertName = tourName + " @ " + venueName + " - " + concertDate;
        concertOption.text = concertName;
        concertOption.value = concertID;

        let reviewID = reviewDropdown.value;
        let titleField = document.getElementById("review-title");
        let ratingField = document.getElementById("review-rating");
        let textField = document.getElementById("review-text");
        const review_by_id_res = await fetch(`/api/review/${reviewID}`,{method:"GET"});
        const review_by_id_json = await review_by_id_res.json();
        const review_by_id = review_by_id_json;
        titleField.value = review_by_id[0].ReviewTitle;
        ratingField.value = review_by_id[0].ReviewRating;
        textField.value = review_by_id[0].ReviewText;
    })

    // Patch review button takes form data and submits it to patch review by id
    let patchReviewButton = document.getElementById("patch-review-button");
    patchReviewButton.addEventListener("click", async function(event) {
        event.PreventDefault;
        let editForm = document.getElementById("edit-form");
        const formData = new FormData(editForm, patchReviewButton);
        formData.append("user_id", `${currentUserID}`);
        let reviewID = formData.get("review_id");
        await fetch(`/api/review/${reviewID}`, {method:"PATCH", body: formData}).then((response) => {
            if (response.status === 200) {
                let modalTrigger = document.getElementById("success-modal-trigger");
                modalTrigger.click();
            }
        })
    })
});
