# Gigaholic Web App

This project is a web application for posting reviews of live music concerts. It uses a relational database to collect, store, modify and delete concert review data with PostgreSQL, and is served by Flask. The final project is hosted on Heroku.

![Gigaholic](static/docs/readme-images/landing.png)

View the live project [here](https://gigaholic.herokuapp.com/)

---

## UX

### User Stories

- Goals for visitors:
    - Log in and out of their account
    - View posted concert reviews
    - Search/filter posted reviews by a variety of categories such as date posted, artist, tour and venue to find what they are looking for
    - Post a new review to the website
    - Visit their profile to see their posted reviews
    - Edit their posted reviews
    - Delete their posted reviews
- Goals for site owner:
    - Manage the site, users and database
    - View posted reviews on site and in the database

## Features

### Header and Navbar

![Header and Nav](static/docs/readme-images/header-nav.png)

The header is a simple title bar featuring the name of the site and, depending on whether the user is logged in or not, either a log in button or a profile button and a log out button. Clicking the site name will take you to the landing page.

Underneath is a navbar with links to the landing page, which shows recently posted reviews, and pages to get reviews filtered by artist, tour and venue. The active tab is changed according to the current window pathname using a switch case statement in JavaScript.

### Log In Page

![Log In Page](static/docs/readme-images/login.png)

If a visitor tries to access a page of the site without being logged in, they will be redirected to the log in page. If incorrect credentials are used, a message is flashed to indicate this.

There is currently no site feature to create users, so at present this can only be done by directly adding a new user into the database.

Passwords are hashed before being stored in the database to avoid plain text passwords being discoverable.

### Hero

![Hero](static/docs/readme-images/search-post-hero.png)

The landing page features a hero image from a concert. Within this is a search bar and a greeting which is personalised to the user, and a post review button. On the other review pages, this feature is still present but is smaller to take up less space on the page and bring more focus to the reviews themselves.

The search button currently doesn't work as unfortunately I didn't have time to implement this feature, however the post button does and will bring you to the post review page.

### Recent Reviews

![Recent](static/docs/readme-images/recent.png)

The landing page displays the most recently posted reviews. This is achieved by using the Fetch API in JavaScript to retrieve all the reviews from the database, converting this data into JSON objects, and then sorted by the review ID in descending order to show newest posted reviews first. This data is looped through to build a div for each review containing the review rating, title, and body text, as well as associated information about the artist and tour, the concert date and location, and the user who posted the review. This list of reviews is then inserted into the HTML document to be viewable by the user.

### Reviews by Artist

![Reviews by Artist](static/docs/readme-images/by-artist.png)

When the Reviews by Artist tab is visited, the Fetch API is used to retrieve all the artists in the database and display them as an unordered list.

These are also links which, when clicked, take you to a page that displays all the reviews for that artist. The pathname also changes to show the artist ID of the selected artist.

![Artist Reviews](static/docs/readme-images/artist-reviews.png)

This review list is built in a similar way, by using the window pathname to make a Fetch request to retrieve the review data for the chosen artist, which is looped through to build the review divs and display them on the page.

### Reviews by Tour

### Reviews by Venue

### Profile

![Profile](static/docs/readme-images/profile.png)

When a user visits their profile, they are able to see a list of all the reviews they have posted. This is achieved by using Flask's current user to get the user ID of the currently logged in user with a Fetch request, followed by another Fetch to get the reviews for that user ID and display them to the page in the usual way.

Beneath this are buttons that allow the user to post a new review, edit their existing reviews, and delete their reviews.

### Post Review Form

![Post Review Form](static/docs/readme-images/post-form.png)

When a user clicks the post a review button on any page, they are redirected to the post review form. This allows the user to pick a concert from a dropdown list built by fetching all the concerts currently in the database and appending them as options to a select element. The user is then required to fill in a review title, a rating which has to be a number between 0 and 10, and their review text.

The submit button then passes the form data to JavaScript with an event listener, and Fetch is used to post this data as a new review to the database. If the Fetch request has been completed successfully, a modal is displayed to indicate this to the user, and closing the modal redirects them to the landing page.

### Edit Review Form

![Edit Review Form](static/docs/readme-images/edit-form.png)

Similarly, clicking the edit reviews button redirects the user to the edit review form. This uses the current user's ID to fetch all their posted reviews and build a dropdown. The concert ID is also attached to each option in the review dropdown, and this is used to get the associated concert information for the currently selected review, to then update the option in the concert dropdown accordingly. The review ID of the selected reivew is used get the data for that review and then pre-populate the form fields with the current review title, rating and text so they can then be edited. These updates happen both when the content is loaded and when the review dropdown is changed.

As with the post form, JavaScript is then used to submit this data, but this time with a patch method in order to update the review with the ID passed in, and success modal is displayed is this request was successful. Closing this redirects the user to their profile.

### Delete Review Form

![Delete Review Form](static/docs/readme-images/delete-form.png)

The delete form page uses the same method as the edit page to build a dropdown of the user's existing reviews.

The delete button uses a Fetch request with the delete method to remove the review with the ID passed in from the database. Again, a success modal is displayed and redirects to the user's profile when closed.

### Improvements and Features to Add

- Unfortunately due to time constraints is was unable to completely finish all features and pages of this application.

---

## Design

---

## Technologies

### Languages

- HTML5
- CSS3
- JavaScript
- Python with Flask
- PostgreSQL

### Frameworks, Libraries, External Stylesheets etc

- [Git](https://git-scm.com/) for version control
- [GitHub](https://github.com/) to store the project repository and back up git commits
- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to assist in creating the structure and design of the webpages
- [Font Awesome](https://fontawesome.com/) for the search icon

