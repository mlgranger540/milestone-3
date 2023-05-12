let navLinks = document.getElementsByClassName("nav-link");
let recentLink;
let byArtistLink;
let byTourLink;
let byVenueLink;

window.onload = (event) => {
    recentLink = navLinks[0];
    byArtistLink = navLinks[1];
    byTourLink = navLinks[2];
    byVenueLink = navLinks[3];

    switch (window.location.pathname) {
        case "/":
            console.log("recent");
            recentLink.classList.add("active");
            byArtistLink.classList.remove("active");
            byTourLink.classList.remove("active");
            byVenueLink.classList.remove("active");
            break;
        case "/reviews_by_artist":
            console.log("by artist");
            recentLink.classList.remove("active");
            byArtistLink.classList.add("active");
            byTourLink.classList.remove("active");
            byVenueLink.classList.remove("active");
            break;
        case "/reviews_by_tour":
            console.log("by tour");
            recentLink.classList.remove("active");
            byArtistLink.classList.remove("active");
            byTourLink.classList.add("active");
            byVenueLink.classList.remove("active");
            break;
        case "/reviews_by_venue":
            console.log("by venue");
            recentLink.classList.remove("active");
            byArtistLink.classList.remove("active");
            byTourLink.classList.remove("active");
            byVenueLink.classList.add("active");
            break;
    }
};
