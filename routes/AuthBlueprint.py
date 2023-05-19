from flask import Blueprint, redirect, flash, request, url_for, render_template
from flask_login import login_user, login_required, logout_user
from classes.models.User import User
from classes.repositories.UserRepository import UserRepository


# Initialise repositories
user_repo = UserRepository()


# Blueprint allows the declaration of flask routes in a different python file
auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET'])
def login():
    return render_template('log-in.html')


@auth.route('/login', methods=['POST'])
def post_login():
    # login code goes here
    username = request.form['username']
    pw = request.form['password'] #plain test pw from user

    user = user_repo.get_user_by_username(username) # type: User

    if user is None:
        print("User doesnt exist...")
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login')) # if the user doesn't exist or password is wrong, reload the page
    
    check_pw = user.check_password(pw)

    if not check_pw:
        print("Not logged in...")
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login')) # if the user doesn't exist or password is wrong, reload the page
    
    
    # if the above check passes, then we know the user has the right credentials
    login_user(user)
    print("{} is logged in...".format(user.UserName))
    return redirect(url_for('auth.profile'))

@auth.route("/profile")
def profile():
    return render_template("profile.html")

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))