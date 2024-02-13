const mainMovieDisplayDiv = document.getElementById('movie-display')
const favoriteMovieDisplay = document.getElementById('favorite-movie-display')

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

  const likeButtonElement = document.getElementById('like-button')
      likeButtonElement.addEventListener('click', () => {
        
        postToDatabase('http://localhost:3000/favoriteList', movies)
      })
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

      movieImageElement.addEventListener('mouseenter', () => {
        const nameBox = document.createElement('a')
        movieImageElement.style.height = '450px';
        movieImageElement.style.width = '250px';
        nameBox.textContent = movie.name
        movieImageElement.appendChild(nameBox)
      })

      movieImageElement.addEventListener('mouseleave', () => {
        movieImageElement.style.width = '100px'
        movieImageElement.style.height = '150px'
      })

    });
  })
}

const postToDatabase = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data)
  })
  .catch(error => {
    console.log(error)
  })
}

const displayFavoriteMovies = () => {
  fetch('http://localhost:3000/favoriteList')
  .then(response => response.json())
  .then(favoriteMovieData => {
      
    favoriteMovieData.forEach(movie => {
      const movieContainer = document.createElement('div')
      const movieImageElement = document.createElement('img')
        movieImageElement.src = movie.moviePoster
        
        movieContainer.appendChild(movieImageElement)
        
        const deleteButton = document.createElement('button')
          deleteButton.innerText = 'Delete'
          movieContainer.appendChild(deleteButton)

        favoriteMovieDisplay.appendChild(movieContainer)
      
      movieImageElement.addEventListener('click', () => {
        clickOnMovies(movie)
      })

      movieImageElement.addEventListener('mouseenter', () => {
        movieImageElement.style.height = '450px';
        movieImageElement.style.width = '250px';
      })

      movieImageElement.addEventListener('mouseleave', () => {
        movieImageElement.style.height = '150px'
        movieImageElement.style.width = '100px'

      })
      
      deleteButton.addEventListener('click', () => {
        movieImageElement.remove()
        deleteMoviesFromFavoriteDatabase(movie.id)
      })
    });
  })
}

const newMovieForm = () => {
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

  const movieListDatabaseSubmitButton = document.getElementById('add-movie-button')
    movieListDatabaseSubmitButton.addEventListener('click', postToDatabase('http://localhost:3000/movieList', newMovieObject))

    newMovieForm.reset()
    return newMovieObject
    })
}

const deleteMoviesFromFavoriteDatabase = (id) => {
    fetch(`http://localhost:3000/favoriteList/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

const initialize = () => {
  displayMainMovies()
   newMovieForm()
  displayFavoriteMovies()
}

initialize()