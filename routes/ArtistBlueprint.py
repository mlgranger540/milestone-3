from flask import Blueprint, render_template
from flask_login import current_user, login_required
from classes.repositories.ArtistRepository import ArtistRepository


# Initialise repositories
artist_repo = ArtistRepository()


# Blueprint allows the declaration of flask routes in a different python file
artist = Blueprint('artist', __name__)


# Get artist by artist_id
@artist.get("/api/artist/<int:artist_id>")
def get_artist_by_id(artist_id):
    return artist_repo.get_artist_by_id(artist_id)


# Get artist by ArtistName
@artist.get("/api/artist/<string:ArtistName>")
def get_artist_by_name(ArtistName):
    return artist_repo.get_artist_by_name(ArtistName)


# Get artist by genre_id
@artist.get("/api/artists/<int:genre_id>")
def get_artists_by_genre_id(genre_id):
    return artist_repo.get_artists_by_genre_id(genre_id)


# Get all artists
@artist.get("/api/artists")
def get_all_artists():
    return artist_repo.get_all_artists()


# Get all artists extended
@artist.get("/api/artists/extended")
def get_all_artists_extended():
    return artist_repo.get_all_artists_extended()


# Route to artist page using artist_id
@artist.route("/artist/<int:artist_id>")
@login_required
def artist_reviews(artist_id):
    artist = artist_repo.get_artist_by_id(artist_id)
    return render_template("artist.html", artist=artist, user=current_user)
