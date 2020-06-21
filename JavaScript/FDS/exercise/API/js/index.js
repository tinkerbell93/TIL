const key = '307f989bd4d1b2124427b7772542ea7a';


// State

const $view = document.querySelector('.view');

const renderMovie = movieData => {
  console.dir(movieData);

  const {
    id, genres, overview
  } = movieData;
  const posterPath = movieData.poster_path;
  const originalTitle = movieData.original_title;
  let genersText = '';

  genres.forEach(genre => {
    genersText += `<span> ${genre.name}</span>`;
  });
  console.log(genersText);

  $view.innerHTML = `<p>id: ${id}</p>
										<p>movie title: ${originalTitle}</p>
										<p><img src="https://image.tmdb.org/t/p/w185/${posterPath}" alt="image"></p>
										<p>geners: ${genersText}</p>
										<p>overview: ${overview}</p>`;
};

const renderMovieList = movieData => {
  console.dir(movieData);
};


const getMovie = () => {
  fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos,image`)
    .then(res => res.json())
    .then(json => renderMovie(json))
    .catch(err => console.error(err));
};

const getMovieList = () => {
  fetch(`https://api.themoviedb.org/3/movie/550/lists?api_key=${key}&language=en-US&page=1`)
    .then(res => res.json())
    .then(json => renderMovieList(json))
    .catch(err => console.error(err));
};

window.onload = () => {
	getMovie();
	getMovieList();
};
