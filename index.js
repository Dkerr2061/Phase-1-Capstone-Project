const mainMovieDisplayDiv = document.getElementById('movie-display')
// console.log(mainMovieDisplayDiv)

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

  const movieDetailIsAnimated = document.getElementById('movie-detail-is-animated')
      movieDetailIsAnimated.textContent = movies.animated

  const movieDetailIsLiveAction = document.getElementById('movie-detail-live-action')
      movieDetailIsLiveAction.textContent = movies.liveAction

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

const handleSubmit = () => {
  const newMovieForm = document.getElementById('add-movie')
    newMovieForm.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event)
  const newMovieName = document.getElementById('new-name')
  const newMovieYear = document.getElementById('new-release-year')
  const newMovieImage = document.getElementById('new-movie-poster')
  const newMovieDirector = document.getElementById('new-director')
  const newLeadActor = document.getElementById('new-lead-actor')
  const newSupportActor = document.getElementById('new-support-actor')
  const newSecondSupportActor = document.getElementById('new-second-support-actor')
  const newMovieGenre = document.getElementById('new-genre')
  const newMovieIsAnimated = document.getElementById('new-animated')
  const newMovieLiveAction = document.getElementById('new-live-action')
  const newMovieDescription = document.getElementById('new-description')
  const movieImageElement = document.createElement('img')
      movieImageElement.src = newMovieImage.value
      console.log(mainMovieDisplayDiv)
      mainMovieDisplayDiv.appendChild(movieImageElement)
  const newMovieObject = {
    name: newMovieName.value,
    releaseYear: newMovieYear.value,
    topCast: {
      leadActor: newLeadActor.value,
      supportActor: newSupportActor.value,
      secondSupportingActor: newSecondSupportActor.value
    },
    director: newMovieDirector.value,
    genre: newMovieGenre.value,
    animated: newMovieIsAnimated.value,
    liveAction: newMovieLiveAction.value,
    description: newMovieDescription.value,
    moviePoster: newMovieImage.value
  }
  movieImageElement.addEventListener('click', () => {
    clickOnMovies(newMovieObject)
  })

    newMovieForm.reset()
    })
}















const initialize = () => {
  displayMainMovies()
  // clickOnMovies()
  handleSubmit()
}

initialize()