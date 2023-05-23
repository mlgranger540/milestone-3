document.addEventListener("DOMContentLoaded", async function(event) {
    // Get id of currently logged in user
    const user_res = await fetch("/api/user/current", {method:"GET"});
    const user_json = await user_res.json();
    const user = user_json;
    var currentUserID = user.id;

    // Builds dropdown from all concerts in database
    const concerts_res = await fetch('/api/concerts/extended',{method:"GET"});
    const concerts_json = await concerts_res.json();
    const concerts = concerts_json;
    let concertDropdown = document.getElementById("concert_dropdown");
    for (let i in concerts) {
        let tourName = concerts[i].TourName;
        let venueName = concerts[i].VenueName;
        let concertDate = concerts[i].ConcertDate;
        let concertID = concerts[i].concert_id;
        let concertName = tourName + " @ " + venueName + " - " + concertDate;
        var option = document.createElement("option");
        option.text = concertName;
        option.value = concertID;
        concertDropdown.appendChild(option);
    }

    // Post review button takes form data and submits it to add a new review to the database
    let postReviewButton = document.getElementById("post-review-button");
    postReviewButton.addEventListener("click", async function(event) {
        event.PreventDefault;
        let postForm = document.getElementById("post-form");
        const formData = new FormData(postForm, postReviewButton);
        await fetch(`/api/review/${currentUserID}`, {method:"POST", body: formData});
    })
});
