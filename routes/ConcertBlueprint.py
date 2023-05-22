from flask import Blueprint
from classes.repositories.ConcertRepository import ConcertRepository


# Initialise repositories
concert_repo = ConcertRepository()


# Blueprint allows the declaration of flask routes in a different python file
concert = Blueprint('concert', __name__)


# Get concert by id
@concert.get('/api/concert/id/<int:concert_id>')
def get_concert_by_concert_id(concert_id):
    return concert_repo.get_concert_by_id(concert_id)


# Get concert extended by id
@concert.get('/api/concert/id/extended/<int:concert_id>')
def get_concert_by_concert_id_extended(concert_id):
    return concert_repo.get_concert_by_id_extended(concert_id)


# Get all concerts extended
@concert.get('/api/concerts/extended')
def get_all_concerts_extended():
    return concert_repo.get_all_concerts_extended()
