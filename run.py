import os
from flask import Flask, render_template
from flask_login import LoginManager, login_required
from classes.repositories.UserRepository import UserRepository
from routes.ConcertBlueprint import concert
from routes.AuthBlueprint import auth
from routes.UserBlueprint import user
from routes.ArtistBlueprint import artist
from dotenv import load_dotenv


load_dotenv()  # take environment variables from .env.

# Start flask server using the --app parameter
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.init_app(app)


# Load in repositories
user_repo = UserRepository()

# Blueprints
app.register_blueprint(concert)
app.register_blueprint(auth)
app.register_blueprint(user)
app.register_blueprint(artist)


@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return user_repo.get_user_by_id(user_id)


# Page routes
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/reviews_by_artist")
def by_artist():
    return render_template("reviews-by-artist.html")


@app.route("/reviews_by_tour")
def by_tour():
    return render_template("reviews-by-tour.html")


@app.route("/reviews_by_venue")
def by_venue():
    return render_template("reviews-by-venue.html")


@app.route("/artist/<int:artist_id>")
def artist_reviews():
    return render_template("artist.html")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True
    )