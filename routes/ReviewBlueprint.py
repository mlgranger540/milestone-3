from flask import Blueprint
from classes.repositories.ReviewRepository import ReviewRepository


# Initialise repositories
review_repo = ReviewRepository()


# Blueprint allows the declaration of flask routes in a different python file
review = Blueprint('review', __name__)


@review.get("/api/reviews/<int:artist_id>")
def get_reviews_by_artist_id(artist_id):
    return review_repo.get_reviews_by_artist_id(artist_id)
