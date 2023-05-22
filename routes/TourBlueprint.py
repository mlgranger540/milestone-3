from flask import Blueprint
from classes.repositories.TourRepository import TourRepository


# Initialise repositories
tour_repo = TourRepository()


# Blueprint allows the declaration of flask routes in a different python file
tour = Blueprint('tour', __name__)


# Get all tours
@tour.get("/api/tours")
def get_all_tours():
    return tour_repo.get_all_tours()
