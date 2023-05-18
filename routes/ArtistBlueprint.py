from flask import Blueprint
from classes.repositories.ArtistRepository import ArtistRepository


# Initialise repositories
artist_repo = ArtistRepository()


# Blueprint allows the declaration of flask routes in a different python file
artist = Blueprint('artist', __name__)


@artist.get("/api/artist/<int:artist_id>")
def get_artist_by_id(artist_id):
    return artist_repo.get_artist_by_id(artist_id)

@artist.get("/api/artists/<int:genre_id>")
def get_artists_by_genre_id(genre_id):
    return artist_repo.get_artists_by_genre_id(genre_id)

@artist.get("/api/artists")
def get_all_artists():
    return artist_repo.get_all_artists()
