# Gigaholic Web App

This project is a web application for posting reviews of live music concerts. It uses a relational database to collect, store, modify and delete concert review data with PostgreSQL, and is served by Flask.

![Gigaholic](static/docs/readme-images/landing.png)

View the live project [here](https://gigaholic.herokuapp.com/)

---

## UX

### Goals

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

This review list is built in a similar way, by using the window pathname to make a Fetch call to retrieve the review data for the chosen artist, which is looped through to build the review divs and display them on the page.

### Profile

![Profile](static/docs/readme-images/profile.png)

When a user visits their profile, they are able to see a list of all the reviews they have posted. This is achieved by using Flask's current user to get the user ID of the currently logged in user with a Fetch call, followed by another Fetch to get the reviews for that user ID and display them to the page in the usual way.

Beneath this are buttons that allow the user to post a new review, edit their existing reviews, and delete their reviews.

