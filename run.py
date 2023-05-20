import os
from flask import Flask, render_template
from flask_login import LoginManager, current_user, login_required
from classes.repositories.UserRepository import UserRepository
from routes.ConcertBlueprint import concert
from routes.AuthBlueprint import auth
from routes.UserBlueprint import user
from routes.ArtistBlueprint import artist
from routes.ReviewBlueprint import review
from routes.TourBlueprint import tour
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

# Register blueprints
app.register_blueprint(concert)
app.register_blueprint(auth)
app.register_blueprint(user)
app.register_blueprint(artist)
app.register_blueprint(review)
app.register_blueprint(tour)


@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return user_repo.get_user_object_by_id(user_id)


# Page routes
@app.route("/")
@login_required
def index():
    print(current_user)
    return render_template("index.html", user=current_user)


@app.route("/reviews_by_artist")
@login_required
def by_artist():
    return render_template("reviews-by-artist.html", user=current_user)


@app.route("/reviews_by_tour")
@login_required
def by_tour():
    return render_template("reviews-by-tour.html", user=current_user)


@app.route("/reviews_by_venue")
@login_required
def by_venue():
    return render_template("reviews-by-venue.html", user=current_user)


@app.route("/post_review/<int:user_id>")
@login_required
def post_review(user_id):
    return render_template("post-review.html", user=current_user)


@app.route("/patch_review/<int:user_id>")
@login_required
def patch_review(user_id):
    return render_template("edit-review.html", user=current_user)


if __name__ == "__main__":
    app.run(
        ssl_context='adhoc',
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True
    )
