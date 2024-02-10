const mainMovieDisplayDiv = document.getElementById('movie-display')

const clickOnMovies = (movies) => {
  const movieDetailDiv = document.getElementById('movie-detail')
  const movieDetailImage = document.querySelector('img#detail-image')
    movieDetailImage.src = movies.moviePoster

  const movieDetailName = document.querySelector('h2#movie-detail-name')
    movieDetailName.textContent = movies.name

  const movieDetailYear = document.getElementById('movie-detail-year')
    movieDetailYear.textContent = movies.releaseYear

  const movieDetailDirector = document.getElementById('movie-detail-director')
    movieDetailDirector.textContent = movies.director

  const movieDetailTopCast = document.getElementById('movie-detail-top-cast')
    movieDetailTopCast.textContent = ''
      for(let role in movies.topCast) {
          let actor = movies.topCast[role]
          const roleElement = document.createElement('p')
          roleElement.textContent = `${role}: ${actor}`
          movieDetailTopCast.appendChild(roleElement)
      }

  const movieDetailGenre = document.getElementById('movie-detail-genre')
    movieDetailGenre.textContent = movies.genre

  const movieDetailDescription = document.getElementById('movie-detail-description')
    movieDetailDescription.textContent = movies.description
}

const displayMainMovies = () => {
  fetch('http://localhost:3000/movieList')
  .then(response => response.json())
  .then(mainMovieDataObject => {
    mainMovieDataObject.forEach(movie => {
      const movieImageElement = document.createElement('img')
        movieImageElement.src = movie.moviePoster
      mainMovieDisplayDiv.appendChild(movieImageElement)
      
      movieImageElement.addEventListener('click', () => {
        clickOnMovies(movie)
      })

    });
  })
}

const addMoviesToMainDataBase = () => {}

const displayFavoriteMovies = () => {}

const displayWatchlistMovies = () => {}

const addMoviesToFavoriteDatabase = () => {}

const addMoviesToWatchlistDatabase = () => {}

const deleteMoviesFromFavoriteDatabase = () => {}

const deleteMoviesFromWatchlistDatabase = () => {}

const handleSubmit = () => {}















const initialize = () => {
  displayMainMovies()
  clickOnMovies()
}

initialize()