import os
from classes.repositories.ArtistRepository import ArtistRepository
from flask import Flask, render_template
from dotenv import load_dotenv


load_dotenv()  # take environment variables from .env.


app = Flask(__name__)

# Load in repositories
artist_repo = ArtistRepository()


# Routes
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/reviews_by_artist")
def by_artist():
    return render_template("by-artist.html")


@app.route("/reviews_by_tour")
def by_tour():
    return render_template("by-tour.html")


@app.route("/reviews_by_venue")
def by_venue():
    return render_template("by-venue.html")


@app.route("/log_in")
def log_in():
    return render_template("log-in.html")


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.get("/api/artist/<int:artist_id>")
def get_artist_by_id(artist_id):
    return artist_repo.get_artist_by_id(artist_id)


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True
    )