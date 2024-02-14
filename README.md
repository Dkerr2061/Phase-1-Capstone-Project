## Movie info app

This is a simple movie info application where the user is able to upload desired movies to a local database. The user is also able to click on 'Add to Favorites' button and add the disired movie to the 'favoriteMovies' database. Users can also remove movies from the 'favoriteMovies' database.

This is the Capstone project for Phase 1 for the Software Engineering program for Flatiron School. This project will demostrate my profficiency with vanilla JavaScript. It will include the use of functions, methods, eventlisteners and fetch requests.

```
All movie info:
  -Name
  -Year
  -Actors
  -Directors
  -Description
  -Genres

Were all used from Imdb.com

```

I do not own any of the rights to any of the information above. This is to be used for educational purposes and not any type monetary gain.

## Usage

To use this application you must run the local database stored in the db.json file and run live server to interact with the website.

```Javascript
# runs db.json file
json-server --watch db.json

# runs live server
live-server
```

## Description

The following JavaScript was used to give the website functionality

```JavaScript
# eventListeners
'click' // This was used to give functionality to specific elements in the page when clicked. Images and buttons.
'submit' // This was used to submit information entered by the user. Submit form.
'mouseenter' // This was used to enlarge the image when the mouse pointer entered the range of the image.
'mouseleave' // This was used to return the image to the original size once the mouse left the range of the image.
```

```JavaScript
# functions
clickOnMovies() // This gives the website funcitonality when the user clicks on the image of a movie.
displayMainMovies() //This is used to display the movies from the movie database in the movie display div.
displayFavoriteMovies() // This is used to display the movies in the favorite movie database in the favorite movie display div.
newMovieForm() // This is used to collect the data that the user enters in the form inputs in order to add a movie in the database and display it on the page.
postToDatabase() // This is a function that will add the movie information to the selected database.
deleteMoviesFromFavoriteDatabase() // This function is used to remove a movie from the favorite movie database and remove it from the favorite movie list displayed on the page.
initialize() // This function is used to run all the functions that do not have an eventListener attached to it.
```

## How to use the webpage

When the page first loads you're greeted by a selection of movie images. If you want to see the details of a movie simply click on the image and it will display all the information below and enlarge the movie poster image.

If you want to add the movie to your favorite list, click the add to favorite list button at the bottom of the description.

If you want to remove a movie from your favorite list, click the delete favorite button at the bottom of the image in the favorite list.

If you want to add a new movie to the website, fill out the provided form. Once the movie has been added you're welcome to add it to your favorite list by following the steps mentioned above.

## Enjoy!