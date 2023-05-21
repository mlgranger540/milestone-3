from flask import Blueprint
from flask_login import login_required, current_user
import jsonpickle
from markupsafe import escape
from classes.repositories.UserRepository import UserRepository


# Initialise repositories
user_repo = UserRepository()


# Blueprint allows the declaration of flask routes in a different python file
user = Blueprint('user', __name__)


@user.get("/api/user/current")
@login_required
def get_id_of_user_logged_in():
    user_info = {}
    user_info["id"] = current_user.user_id
    return jsonpickle.encode(user_info, False)


@user.get("/api/user/id/<int:user_id>")
def get_user_by_id(user_id):
    return user_repo.get_user_by_id(user_id)


@user.get("/api/user/username/<user_name>")
def get_user_by_username(user_name):
    return user_repo.get_user_by_username_json(escape(user_name))
